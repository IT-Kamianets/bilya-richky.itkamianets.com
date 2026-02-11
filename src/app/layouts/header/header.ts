import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService, ThemeName } from '../../services/theme.service';

@Component({
	selector: 'app-header',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './header.html',
	styleUrl: './header.css',
})
export class Header {
	protected readonly theme = inject(ThemeService);
	protected isMenuOpen = false;
	protected isThemeMenuOpen = false;

	protected toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}

	protected closeMenu() {
		this.isMenuOpen = false;
	}

	protected toggleThemeMenu(): void {
		this.isThemeMenuOpen = !this.isThemeMenuOpen;
	}

	protected closeThemeMenu(): void {
		this.isThemeMenuOpen = false;
	}

	protected setTheme(theme: ThemeName): void {
		this.theme.setTheme(theme);
		this.closeThemeMenu();
	}
}
