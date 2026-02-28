import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService, ThemeName } from '../../services/theme.service';

@Component({
	selector: 'app-footer',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [RouterLink],
	templateUrl: './footer.html',
	styleUrl: './footer.css',
})
export class Footer {
	protected readonly theme = inject(ThemeService);
	protected readonly year = new Date().getFullYear();
	protected isThemeMenuOpen = false;

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
