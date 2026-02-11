import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

export type ThemeName = 'light' | 'dark' | 'itkp' | 'hotel';

@Injectable({
	providedIn: 'root',
})
export class ThemeService {
	private readonly storageKey = 'theme';
	private readonly platformId = inject(PLATFORM_ID);
	private readonly document = inject(DOCUMENT);
	private readonly current = signal<ThemeName>('hotel');

	init(): void {
		if (!isPlatformBrowser(this.platformId)) {
			this.current.set('hotel');
			return;
		}

		const stored = localStorage.getItem(this.storageKey) as ThemeName | null;
		const theme = this.isValidTheme(stored) ? stored : 'hotel';
		this.applyTheme(theme);
	}

	setTheme(theme: ThemeName): void {
		if (!this.isValidTheme(theme)) {
			return;
		}

		this.applyTheme(theme);
		if (isPlatformBrowser(this.platformId)) {
			localStorage.setItem(this.storageKey, theme);
		}
	}

	currentTheme(): ThemeName {
		return this.current();
	}

	private applyTheme(theme: ThemeName): void {
		this.current.set(theme);
		if (isPlatformBrowser(this.platformId)) {
			this.document.documentElement.setAttribute('data-theme', theme);
		}
	}

	private isValidTheme(theme: string | null | undefined): theme is ThemeName {
		return theme === 'light' || theme === 'dark' || theme === 'itkp' || theme === 'hotel';
	}
}
