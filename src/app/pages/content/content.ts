import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-content',
	imports: [RouterLink],
	templateUrl: './content.html',
	styleUrl: './content.css',
})
export class Content {
	scrollTo(event: Event, id: string): void {
		event.preventDefault();

		if (typeof document === 'undefined') {
			return;
		}

		const target = document.getElementById(id);
		if (!target) {
			return;
		}

		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
}

