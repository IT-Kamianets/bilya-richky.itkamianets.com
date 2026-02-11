import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [CommonModule, RouterLink],
	templateUrl: './table.html',
	styleUrls: ['./table.css'],
})
export class TablePage {}
