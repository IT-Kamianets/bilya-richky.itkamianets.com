// models/Product.model.ts
export interface RoomSpecifications {
  Sleeps?: number | string;
  View?: string;
  Size?: string;
  Bed?: string;
  Breakfast?: string;
  [key: string]: string | number | undefined;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;

  // Extended fields used by the hotel site
  images?: string[]; // Gallery images
  stock: number; // Availability count
  sku?: string; // Room code
  brand?: string; // Wing or building
  discount?: number; // Discount in %
  isNew?: boolean; // Newly added room
  specifications?: RoomSpecifications;
  reviews?: ProductReview[];
  relatedProductIds?: number[];
  tags?: string[];
}

export interface ProductReview {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: Date;
  verified?: boolean;
}

export interface ProductFilters {
  category: string;
  priceMin: number;
  priceMax: number;
  searchQuery: string;
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'name' | 'newest';
  inStockOnly: boolean;
}

export interface ViewMode {
  type: 'grid' | 'list';
  itemsPerPage: number;
}


