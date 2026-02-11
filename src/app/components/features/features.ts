import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-features',
	imports: [RouterLink],
	templateUrl: './features.html',
	styleUrl: './features.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Features {}
