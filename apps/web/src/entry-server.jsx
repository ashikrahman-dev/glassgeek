import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '@/App';

// Routes written out as static HTML by tools/prerender.js.
export const routes = ['/', '/services', '/contact', '/gallery'];

export function render(url) {
	const helmetContext = {};
	const html = renderToString(
		<HelmetProvider context={helmetContext}>
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		</HelmetProvider>
	);
	const { helmet } = helmetContext;
	const head = [helmet.title, helmet.meta, helmet.link, helmet.script].map(String).join('\n');

	return { html, head };
}
