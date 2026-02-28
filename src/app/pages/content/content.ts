import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-content',
	imports: [TranslatePipe],
	templateUrl: './content.html',
	styleUrl: './content.css',
})
export class Content {}
