#!/usr/bin/env node

// Renders every route in src/entry-server.jsx to its own index.html, like Next.js static export.
// Runs after both the client build (dist/apps/web) and the SSR build (dist/apps/web-ssr).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const clientDir = path.resolve(webRoot, '../../dist/apps/web');
const serverDir = path.resolve(webRoot, '../../dist/apps/web-ssr');

const template = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf8');
// The SSR bundle is ESM; say so, since the monorepo root package.json does not.
fs.writeFileSync(path.join(serverDir, 'package.json'), '{"type":"module"}');
const { render, routes } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);

// Tags a page's <Helmet> provides replace the site-wide defaults in index.html.
const overridable = [
	[/<title/, /<title>[\s\S]*?<\/title>\s*/],
	[/name="description"/, /<meta name="description"[^>]*>\s*/],
	[/rel="canonical"/, /<link rel="canonical"[^>]*>\s*/],
];

for (const url of routes) {
	const { html, head } = render(url);
	let page = template;

	for (const [inHead, inTemplate] of overridable) {
		if (inHead.test(head)) {
			page = page.replace(inTemplate, '');
		}
	}

	page = page
		.replace('</head>', `${head}\n</head>`)
		.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

	// Hosts differ on whether /services resolves to services.html or services/index.html, so write both.
	const files = url === '/' ? ['index.html'] : [`${url.slice(1)}.html`, `${url.slice(1)}/index.html`];

	for (const name of files) {
		const file = path.join(clientDir, name);
		fs.mkdirSync(path.dirname(file), { recursive: true });
		fs.writeFileSync(file, page);
	}

	console.log(`prerendered ${url} -> ${files.join(', ')}`);
}

fs.rmSync(serverDir, { recursive: true, force: true });
