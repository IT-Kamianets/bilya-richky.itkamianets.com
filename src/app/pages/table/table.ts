import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [CommonModule, TranslatePipe],
	templateUrl: './table.html',
	styleUrls: ['./table.css'],
})
export class TablePage {}
