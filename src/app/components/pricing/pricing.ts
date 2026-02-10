import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-pricing',
	imports: [RouterLink],
	templateUrl: './pricing.html',
	styleUrl: './pricing.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pricing {}

