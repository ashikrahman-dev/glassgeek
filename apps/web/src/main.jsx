import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '@/App';
import '@/index.css';

const container = document.getElementById('root');
const app = (
	<HelmetProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</HelmetProvider>
);

// Prerendered pages ship with markup inside #root; hydrate those, render from scratch otherwise (dev).
if (container.hasChildNodes()) {
	ReactDOM.hydrateRoot(container, app);
} else {
	ReactDOM.createRoot(container).render(app);
}
