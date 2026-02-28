import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService, Language } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, RouterLinkActive, TranslatePipe],
	templateUrl: './header.html',
	styleUrl: './header.css',
})
export class Header {
	protected readonly language = inject(LanguageService);
	protected isMenuOpen = false;
	protected isSocialMenuOpen = false;

	protected toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}

	protected closeMenu() {
		this.isMenuOpen = false;
	}

	protected toggleSocialMenu(): void {
		this.isSocialMenuOpen = !this.isSocialMenuOpen;
	}

	protected closeSocialMenu(): void {
		this.isSocialMenuOpen = false;
	}

	protected setLanguage(lang: Language): void {
		this.language.setLanguage(lang);
	}
}
