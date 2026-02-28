import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-hero',
	imports: [RouterLink, TranslatePipe],
	templateUrl: './hero.html',
	styleUrl: './hero.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
