import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/Product.model';
import { ListItem } from '../../pages/list/list-item/list-item';
import { PRODUCTS } from '../../data/products';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
	selector: 'app-list-items-section',
	standalone: true,
	imports: [CommonModule, RouterLink, ListItem, TranslatePipe],
	templateUrl: './list-items-section.html',
	styleUrls: ['./list-items-section.css'],
})
export class ListItemsSection implements OnInit {
	products: Product[] = [];
	maxItems = 3;

	ngOnInit(): void {
		this.products = PRODUCTS;
	}

	get displayProducts(): Product[] {
		return this.products.slice(0, this.maxItems);
	}
}
