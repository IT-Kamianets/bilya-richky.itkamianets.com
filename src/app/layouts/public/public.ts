import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { MobileNav } from '../mobile-nav/mobile-nav';

@Component({
	selector: 'app-public',
	imports: [RouterOutlet, Header, Footer, MobileNav],
	templateUrl: './public.html',
	styleUrl: './public.css',
})
export class Public {}
