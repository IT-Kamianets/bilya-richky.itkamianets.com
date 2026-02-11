import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Features } from '../../components/features/features';
import { FinalCta } from '../../components/final-cta/final-cta';
import { Hero } from '../../components/hero/hero';
import { ListItemsSection } from '../../components/list-items-section/list-items-section';
import { Showcase } from '../../components/showcase/showcase';
import { Testimonials } from '../../components/testimonials/testimonials';
import { TrustBar } from '../../components/trust-bar/trust-bar';


@Component({
	imports: [
		Hero,
		TrustBar,
		Features,
		ListItemsSection,
		Showcase,
		Testimonials,
		FinalCta,
	],
	templateUrl: './home.html',
	styleUrl: './home.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
