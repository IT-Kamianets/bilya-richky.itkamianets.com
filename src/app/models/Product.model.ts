// models/Product.model.ts
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  
  // Розширені поля
  images?: string[];              // Галерея фото (мініатюри)
  stock: number;                  // Кількість на складі
  sku?: string;                   // Артикул
  brand?: string;                 // Бренд
  discount?: number;              // Знижка в %
  isNew?: boolean;                // Новинка
  specifications?: {              // Детальні характеристики
    [key: string]: string;
  };
  reviews?: ProductReview[];      // Відгуки користувачів
  relatedProductIds?: number[];   // ID схожих товарів
  tags?: string[];                // Теги для пошуку
}

export interface ProductReview {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: Date;
  verified?: boolean;             // Підтверджена покупка
}

// Тип для фільтрів
export interface ProductFilters {
  category: string;
  priceMin: number;
  priceMax: number;
  searchQuery: string;
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'name' | 'newest';
  inStockOnly: boolean;
}

// Тип для налаштувань відображення
export interface ViewMode {
  type: 'grid' | 'list';
  itemsPerPage: number;
}