import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrls: ['./table.css']
})
export class TablePage {
  products: Product[] = PRODUCTS;

  constructor(private router: Router) {}

  buyNow(item: Product) {
    this.router.navigate(['/form'], { queryParams: { id: item.id } });
  }
}

