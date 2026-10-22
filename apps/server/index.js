// Serves the prerendered site from dist/apps/web and accepts quote requests at POST /api/quotes.
// Quotes are emailed via SMTP (when configured) and appended to data/quotes.ndjson as a backup.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import nodemailer from 'nodemailer';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

try {
	process.loadEnvFile(path.join(root, '.env'));
} catch {
	// No .env file; rely on the host's environment variables.
}

const staticDir = path.join(root, 'dist/apps/web');
const dataDir = process.env.DATA_DIR || path.join(root, 'data');
const port = Number(process.env.PORT) || 3001;

const serviceTypes = new Set([
	'sliding-door-repair',
	'window-repair',
	'roller-replacement',
	'track-replacement',
	'glass-replacement',
	'lock-repair',
	'other',
]);
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const mailer = process.env.SMTP_HOST
	? nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT) || 465,
		secure: (Number(process.env.SMTP_PORT) || 465) === 465,
		auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
	})
	: null;

if (!mailer) {
	console.warn('SMTP_HOST is not set; quotes will only be saved to', dataDir);
}

// At most 5 quote requests per IP every 10 minutes.
const rateWindowMs = 10 * 60 * 1000;
const rateLimit = 5;
const recentRequests = new Map();

function isRateLimited(ip) {
	const now = Date.now();
	const times = (recentRequests.get(ip) || []).filter((t) => now - t < rateWindowMs);
	times.push(now);
	recentRequests.set(ip, times);
	return times.length > rateLimit;
}

function validateQuote(body) {
	const field = (name, max) => String(body?.[name] ?? '').trim().slice(0, max);
	const quote = {
		fullName: field('fullName', 200),
		phone: field('phone', 50),
		email: field('email', 200),
		serviceType: field('serviceType', 50),
		description: field('description', 5000),
	};

	if (!quote.fullName || !quote.phone || !quote.description) return null;
	if (!emailPattern.test(quote.email)) return null;
	if (!serviceTypes.has(quote.serviceType)) return null;

	return quote;
}

async function saveQuote(quote) {
	await fs.mkdir(dataDir, { recursive: true });
	await fs.appendFile(path.join(dataDir, 'quotes.ndjson'), JSON.stringify(quote) + '\n');
}

async function emailQuote(quote) {
	await mailer.sendMail({
		from: process.env.SMTP_FROM || process.env.SMTP_USER,
		to: process.env.QUOTE_TO_EMAIL || process.env.SMTP_USER,
		replyTo: quote.email,
		subject: `New quote request from ${quote.fullName}`,
		text: [
			`Name: ${quote.fullName}`,
			`Phone: ${quote.phone}`,
			`Email: ${quote.email}`,
			`Service: ${quote.serviceType}`,
			`Received: ${quote.created}`,
			'',
			quote.description,
		].join('\n'),
	});
}

const app = express();
app.set('trust proxy', true);

app.post('/api/quotes', express.json({ limit: '20kb' }), async (req, res) => {
	// Honeypot: real visitors never see or fill the "website" field.
	if (req.body?.website) {
		return res.status(201).json({ ok: true });
	}

	if (isRateLimited(req.ip)) {
		return res.status(429).json({ error: 'Too many requests. Please try again later.' });
	}

	const quote = validateQuote(req.body);
	if (!quote) {
		return res.status(400).json({ error: 'Please fill in all fields correctly.' });
	}
	quote.created = new Date().toISOString();

	const results = await Promise.allSettled([saveQuote(quote), mailer ? emailQuote(quote) : Promise.reject(new Error('SMTP not configured'))]);
	const [saved, emailed] = results;

	if (saved.status === 'rejected') console.error('Failed to save quote:', saved.reason);
	if (emailed.status === 'rejected' && mailer) console.error('Failed to email quote:', emailed.reason);

	if (saved.status === 'rejected' && emailed.status === 'rejected') {
		return res.status(500).json({ error: 'Failed to submit quote request.' });
	}

	res.status(201).json({ ok: true });
});

app.use('/assets', express.static(path.join(staticDir, 'assets'), { maxAge: '7d', immutable: true }));

// Serve /services (or /services/) from the prerendered services.html.
app.use((req, res, next) => {
	const route = req.path.replace(/^\/+|\/+$/g, '');
	if (req.method !== 'GET' || !route || path.extname(route)) return next();
	res.sendFile(`${route}.html`, { root: staticDir }, (err) => err && next());
});

app.use(express.static(staticDir));

// Unknown paths fall back to the home page, matching the catch-all route in App.jsx.
app.use((req, res, next) => {
	if (req.method !== 'GET') return next();
	res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
