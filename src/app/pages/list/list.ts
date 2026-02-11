import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from '../../models/Product.model';
import { ListItem } from './list-item/list-item';
import { PRODUCTS } from '../../data/products';

interface RoomFilters {
	category: string;
	searchQuery: string;
	sortBy: 'price-asc' | 'price-desc' | 'name';
}

@Component({
	selector: 'app-list',
	standalone: true,
	imports: [CommonModule, FormsModule, ListItem],
	templateUrl: './list.html',
	styleUrls: ['./list.css'],
})
export class List implements OnInit {
	products: Product[] = PRODUCTS;
	filteredProducts: Product[] = [];

	categories = ['All', 'Rooms', 'Cottages', 'Suites'];

	filters: RoomFilters = {
		category: 'All',
		searchQuery: '',
		sortBy: 'price-asc',
	};

	ngOnInit(): void {
		this.applyFilters();
	}

	applyFilters(): void {
		let result = [...this.products];

		if (this.filters.category !== 'All') {
			result = result.filter((room) => room.category === this.filters.category);
		}

		if (this.filters.searchQuery) {
			const query = this.filters.searchQuery.toLowerCase();
			result = result.filter((room) =>
				room.title.toLowerCase().includes(query) ||
				room.description.toLowerCase().includes(query)
			);
		}

		result = this.sortRooms(result);
		this.filteredProducts = result;
	}

	sortRooms(rooms: Product[]): Product[] {
		switch (this.filters.sortBy) {
			case 'price-desc':
				return rooms.sort((a, b) => b.price - a.price);
			case 'name':
				return rooms.sort((a, b) => a.title.localeCompare(b.title));
			case 'price-asc':
			default:
				return rooms.sort((a, b) => a.price - b.price);
		}
	}
}
