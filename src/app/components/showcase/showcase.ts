import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-showcase',
	imports: [RouterLink],
	templateUrl: './showcase.html',
	styleUrl: './showcase.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Showcase {}
