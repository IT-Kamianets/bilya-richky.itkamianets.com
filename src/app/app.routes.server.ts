// src/app/app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
	// prerender only static routes
	{ path: '', renderMode: RenderMode.Prerender },
	{ path: 'rooms', renderMode: RenderMode.Prerender },
	{ path: 'list', renderMode: RenderMode.Prerender },
	{ path: 'gallery', renderMode: RenderMode.Prerender },
	{ path: 'location', renderMode: RenderMode.Prerender },
	{ path: 'content', renderMode: RenderMode.Prerender },
	{ path: 'booking', renderMode: RenderMode.Prerender },
	{ path: 'form', renderMode: RenderMode.Prerender },
	{ path: 'amenities', renderMode: RenderMode.Prerender },
	{ path: 'table', renderMode: RenderMode.Prerender },

	// fallback must be SSR (otherwise it tries to prerender everything)
	{ path: '**', renderMode: RenderMode.Server },
];
