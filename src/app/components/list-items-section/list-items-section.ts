import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/Product.model';
import { ListItem } from '../../pages/list/list-item/list-item';
import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-list-items-section',
  standalone: true,
  imports: [CommonModule, ListItem],
  templateUrl: './list-items-section.html',
  styleUrls: ['./list-items-section.css']
})
export class ListItemsSection implements OnInit {
  products: Product[] = [];

  @Input() title: string = 'Featured Rooms & Cottages';
  @Input() subtitle: string = 'A few popular room types and cottages for a calm stay.';
  @Input() maxItems: number = 3;
  @Input() showViewAll: boolean = true;
  @Input() viewAllText: string = 'View all rooms';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.products = PRODUCTS;
  }

  get displayProducts(): Product[] {
    return this.products.slice(0, this.maxItems);
  }

  onViewProduct(productId: number): void {
    this.router.navigate(['/profile', productId]);
  }

  navigateToList(): void {
    this.router.navigate(['/list']);
  }
}

