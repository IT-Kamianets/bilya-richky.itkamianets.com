import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Pipe({
	name: 't',
	standalone: true,
	pure: false,
})
export class TranslatePipe implements PipeTransform, OnDestroy {
	private readonly subscription: Subscription;

	constructor(private readonly language: LanguageService, private readonly cdr: ChangeDetectorRef) {
		this.subscription = this.language.language$.subscribe(() => {
			this.cdr.markForCheck();
		});
	}

	transform(key: string): string {
		return this.language.translate(key);
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
