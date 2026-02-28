import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

export type Language = 'ua' | 'en';

const TRANSLATIONS: Record<Language, Record<string, string>> = {
	ua: {
		'nav.home': 'Головна',
		'nav.rooms': 'Номери',
		'nav.amenities': 'Зручності',
		'nav.location': 'Локація та контакти',
		'nav.gallery': 'Галерея',
		'nav.contacts': 'Контакти',
		'hero.kicker': 'Бутик-готель біля річки',
		'hero.titlePrefix': 'Відпочинок біля Смотрича у',
		'hero.subtitle':
			'Теплий, затишний відпочинок із краєвидами каньйону та швидким доступом до Старого міста.',
		'hero.viewRooms': 'Переглянути номери',
		'hero.contactLabel': 'Зв’язок через соцмережі',
		'hero.bookOnBooking': 'Бронювати на Booking',
		'hero.message': 'Написати',
		'rooms.kicker': 'Номери та ціни',
		'rooms.title': 'Номери для спокійного відпочинку',
		'amenities.kicker': 'Зручності',
		'amenities.title': 'Усе для тихого відпочинку',
		'location.kicker': 'Локація',
		'location.title': 'Між каньйоном та Старим містом',
		'gallery.kicker': 'Галерея',
		'gallery.title': 'Візуальна подорож Bilya Richky',
		'home.featuredKicker': 'Рекомендовані номери',
		'home.featuredTitle': 'Затишні, продумані простори',
	},
	en: {
		'nav.home': 'Home',
		'nav.rooms': 'Rooms',
		'nav.amenities': 'Amenities',
		'nav.location': 'Location & Contacts',
		'nav.gallery': 'Gallery',
		'nav.contacts': 'Contacts',
		'hero.kicker': 'Riverside Boutique Hotel',
		'hero.titlePrefix': 'Stay by the Smotrych river at',
		'hero.subtitle':
			'A calm, warm retreat with canyon views, handcrafted interiors, and easy access to Old Town.',
		'hero.viewRooms': 'View rooms',
		'hero.contactLabel': 'Contact via socials',
		'hero.bookOnBooking': 'Book on Booking',
		'hero.message': 'Message',
		'rooms.kicker': 'Rooms & Prices',
		'rooms.title': 'Rooms designed for restful stays',
		'amenities.kicker': 'Amenities',
		'amenities.title': 'Everything you need for a quiet stay',
		'location.kicker': 'Location',
		'location.title': 'Between the canyon and the Old Town',
		'gallery.kicker': 'Gallery',
		'gallery.title': 'A visual tour of Bilya Richky',
		'home.featuredKicker': 'Featured rooms',
		'home.featuredTitle': 'Stay in calm, curated spaces',
	},
};

@Injectable({
	providedIn: 'root',
})
export class LanguageService {
	private readonly storageKey = 'bilya-richky-lang';
	private readonly platformId = inject(PLATFORM_ID);
	private readonly document = inject(DOCUMENT);
	private readonly current = signal<Language>('ua');
	private readonly languageSubject = new BehaviorSubject<Language>('ua');
	readonly language$ = this.languageSubject.asObservable();

	constructor() {
		const initial = this.getInitialLanguage();
		this.setLanguage(initial);
	}

	setLanguage(lang: Language): void {
		if (!this.isValidLanguage(lang)) {
			return;
		}

		this.current.set(lang);
		this.languageSubject.next(lang);

		if (isPlatformBrowser(this.platformId)) {
			localStorage.setItem(this.storageKey, lang);
			this.document.documentElement.setAttribute('lang', lang);
		}
	}

	currentLanguage(): Language {
		return this.current();
	}

	translate(key: string): string {
		const lang = this.current();
		return TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
	}

	private getInitialLanguage(): Language {
		if (!isPlatformBrowser(this.platformId)) {
			return 'ua';
		}

		const stored = localStorage.getItem(this.storageKey);
		return this.isValidLanguage(stored) ? stored : 'ua';
	}

	private isValidLanguage(value: string | null | undefined): value is Language {
		return value === 'ua' || value === 'en';
	}
}
