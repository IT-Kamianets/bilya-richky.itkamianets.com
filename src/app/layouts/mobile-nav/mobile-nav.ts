import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-mobile-nav',
	standalone: true,
	imports: [RouterLink, RouterLinkActive, TranslatePipe],
	templateUrl: './mobile-nav.html',
	styleUrl: './mobile-nav.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileNav {}
