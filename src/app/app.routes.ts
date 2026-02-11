import { Routes } from '@angular/router';
import { Public } from './layouts/public/public';
import { Content } from './pages/content/content';
import { FormPage } from './pages/form/form';
import { Gallery } from './pages/gallery/gallery';
import { Home } from './pages/home/home';
import { List } from './pages/list/list';
import { TablePage } from './pages/table/table';

export const routes: Routes = [
	{
		path: '',
		component: Public,
		children: [
			{ path: '', component: Home },
			{ path: 'home', redirectTo: '', pathMatch: 'full' },
			{ path: 'rooms', component: List },
			{ path: 'list', redirectTo: 'rooms', pathMatch: 'full' },
			{ path: 'gallery', component: Gallery },
			{ path: 'location', component: Content },
			{ path: 'content', redirectTo: 'location', pathMatch: 'full' },
			{ path: 'booking', component: FormPage },
			{ path: 'form', redirectTo: 'booking', pathMatch: 'full' },
			{ path: 'amenities', component: TablePage },
			{ path: 'table', redirectTo: 'amenities', pathMatch: 'full' },
		],
	},
	{
		path: '**',
		redirectTo: '',
	},
];

