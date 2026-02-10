// data/products.ts
import { Product } from '../models/Product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Cottage with two separate beds',
    description: 'Simple cottage option with two separate beds and a calm countryside atmosphere.',
    price: 700,
    category: 'Cottages',
    image: 'assets/img/bilya-richky/rooms/cottage-2beds_exterior-1.jpg',
    rating: 4.4,
    stock: 4,
    sku: 'CT-TWN-01',
    brand: 'Cottage Yard',
    discount: 0,
    isNew: false,
    images: [
      'assets/img/bilya-richky/rooms/cottage-2beds_exterior-1.jpg',
      'assets/img/bilya-richky/rooms/cottage-2beds_exterior-2.jpg',
      'assets/img/bilya-richky/rooms/cottage-2beds_placeholder.jpg'
    ],
    specifications: {
      Sleeps: '2',
      Bed: 'Two separate beds',
      View: 'Courtyard / garden',
      Breakfast: 'From 70 UAH per person'
    },
    reviews: [],
    relatedProductIds: [2, 7, 8],
    tags: ['cottage', 'twin']
  },
  {
    id: 2,
    title: 'Economy cottage (3 beds), 12 m2',
    description: 'Compact 12 m2 cottage with three beds for a practical, budget-friendly stay.',
    price: 800,
    category: 'Cottages',
    image: 'assets/img/bilya-richky/rooms/cottage-economy-3beds_exterior-1.jpg',
    rating: 4.3,
    stock: 3,
    sku: 'CT-ECO-02',
    brand: 'Cottage Yard',
    discount: 0,
    isNew: false,
    images: [
      'assets/img/bilya-richky/rooms/cottage-economy-3beds_exterior-1.jpg',
      'assets/img/bilya-richky/rooms/cottage-economy-3beds_exterior-2.jpg',
      'assets/img/bilya-richky/rooms/cottage-economy-3beds_placeholder.jpg'
    ],
    specifications: {
      Sleeps: '3',
      Bed: '3 separate beds',
      View: 'Courtyard / garden',
      Size: '12 m2',
      Breakfast: 'From 70 UAH per person'
    },
    reviews: [],
    relatedProductIds: [1, 7, 8],
    tags: ['cottage', 'economy']
  },
  {
    id: 3,
    title: 'Standard double room (2 guests)',
    description: 'Classic double room for two guests with a warm, clean interior.',
    price: 1000,
    category: 'Standard Rooms',
    image: 'assets/img/bilya-richky/rooms/standard-double_main.jpg',
    rating: 4.6,
    stock: 5,
    sku: 'RM-DBL-03',
    brand: 'Main Building',
    discount: 0,
    isNew: false,
    images: [
      'assets/img/bilya-richky/rooms/standard-double_main.jpg',
      'assets/img/bilya-richky/rooms/standard-double_alt-1.jpg',
      'assets/img/bilya-richky/rooms/standard-double_alt-2.jpg'
    ],
    specifications: {
      Sleeps: '2',
      Bed: 'Double bed',
      View: 'Standard room',
      Breakfast: 'From 70 UAH per person'
    },
    reviews: [],
    relatedProductIds: [4, 5, 9],
    tags: ['double', 'standard']
  },
  {
    id: 4,
    title: 'Mansard double room (attic)',
    description: 'Cozy attic-style double room with a sloped ceiling and warm wood accents.',
    price: 1200,
    category: 'Mansard Rooms',
    image: 'assets/img/bilya-richky/rooms/mansard-double_main.jpg',
    rating: 4.6,
    stock: 4,
    sku: 'RM-MAN-04',
    brand: 'Main Building',
    discount: 0,
    isNew: true,
    images: [
      'assets/img/bilya-richky/rooms/mansard-double_main.jpg',
      'assets/img/bilya-richky/rooms/mansard-double_alt-1.jpg',
      'assets/img/bilya-richky/rooms/mansard-double_alt-2.jpg'
    ],
    specifications: {
      Sleeps: '2',
      Bed: 'Double bed',
      View: 'Mansard / attic',
      Breakfast: 'From 70 UAH per person'
    },
    reviews: [],
    relatedProductIds: [3, 5, 9],
    tags: ['mansard', 'double']
  },
  {
    id: 5,
    title: 'Triple room with three separate beds',
    description: 'Triple room with three separate beds for friends or small groups.',
    price: 1200,
    category: 'Triple Rooms',
    image: 'assets/img/bilya-richky/rooms/triple-separate_main.jpg',
    rating: 4.5,
    stock: 4,
    sku: 'RM-TRI-05',
    brand: 'Main Building',
    discount: 0,
    isNew: false,
    images: [
      'assets/img/bilya-richky/rooms/triple-separate_main.jpg',
      'assets/img/bilya-richky/rooms/triple-separate_alt-1.jpg',
      'assets/img/bilya-richky/rooms/triple-separate_alt-2.jpg'
    ],
    specifications: {
      Sleeps: '3',
      Bed: '3 separate beds',
      View: 'Standard room',
      Breakfast: 'From 70 UAH per person'
    },
    reviews: [],
    relatedProductIds: [4, 6],
    tags: ['triple', 'separate-beds']
  },
  {
    id: 6,
    title: 'Standard triple room',
    description: 'Standard triple room with a practical layout for three guests.',
    price: 1400,
    category: 'Triple Rooms',
    image: 'assets/img/bilya-richky/rooms/triple-standard_main.jpg',
    rating: 4.5,
    stock: 5,
    sku: 'RM-STR-06',
    brand: 'Main Building',
    discount: 0,
    isNew: false,
    images: [
      'assets/img/bilya-richky/rooms/triple-standard_main.jpg',
      'assets/img/bilya-richky/rooms/triple-standard_alt-1.jpg',
      'assets/img/bilya-richky/rooms/triple-standard_alt-2.jpg'
    ],
    specifications: {
      Sleeps: '3',
      Bed: 'Triple setup',
      View: 'Standard room',
      Breakfast: 'From 70 UAH per person'
    },
    reviews: [],
    relatedProductIds: [5, 9],
    tags: ['triple', 'standard']
  },
  {
    id: 7,
    title: 'Cottage (3 guests)',
    description: 'Cottage option suitable for three guests, close to the green territory.',
    price: 1300,
    category: 'Cottages',
    image: 'assets/img/bilya-richky/rooms/cottage-3guests_exterior-1.jpg',
    rating: 4.4,
    stock: 3,
    sku: 'CT-3G-07',
    brand: 'Cottage Yard',
    discount: 0,
    isNew: false,
    images: [
      'assets/img/bilya-richky/rooms/cottage-3guests_exterior-1.jpg',
      'assets/img/bilya-richky/rooms/cottage-3guests_exterior-2.jpg',
      'assets/img/bilya-richky/rooms/cottage-3guests_placeholder.jpg'
    ],
    specifications: {
      Sleeps: '3',
      Bed: '3-person setup',
      View: 'Courtyard / garden',
      Breakfast: 'From 70 UAH per person'
    },
    reviews: [],
    relatedProductIds: [1, 2, 8],
    tags: ['cottage', '3-guests']
  },
  {
    id: 8,
    title: 'Two-room cottage',
    description: 'Two-room cottage layout for a more private, comfortable stay.',
    price: 1600,
    category: 'Cottages',
    image: 'assets/img/bilya-richky/rooms/cottage-two-room_exterior-1.jpg',
    rating: 4.5,
    stock: 2,
    sku: 'CT-2RM-08',
    brand: 'Cottage Yard',
    discount: 0,
    isNew: false,
    images: [
      'assets/img/bilya-richky/rooms/cottage-two-room_exterior-1.jpg',
      'assets/img/bilya-richky/rooms/cottage-two-room_exterior-2.jpg',
      'assets/img/bilya-richky/rooms/cottage-two-room_placeholder.jpg'
    ],
    specifications: {
      Bed: 'Two-room layout',
      View: 'Courtyard / garden',
      Breakfast: 'From 70 UAH per person'
    },
    reviews: [],
    relatedProductIds: [1, 7, 9],
    tags: ['cottage', 'two-room']
  },
  {
    id: 9,
    title: 'Two-room Junior Suite (Semi-lux)',
    description: 'Two-room Junior Suite (Semi-lux) with extra space for a quieter, longer stay.',
    price: 2000,
    category: 'Junior Suite',
    image: 'assets/img/bilya-richky/rooms/semi-lux_main.jpg',
    rating: 4.7,
    stock: 2,
    sku: 'JS-2RM-09',
    brand: 'Main Building',
    discount: 0,
    isNew: true,
    images: [
      'assets/img/bilya-richky/rooms/semi-lux_main.jpg',
      'assets/img/bilya-richky/rooms/semi-lux_alt-1.jpg',
      'assets/img/bilya-richky/rooms/semi-lux_alt-2.jpg'
    ],
    specifications: {
      Bed: 'Two-room layout',
      View: 'Standard room',
      Breakfast: 'From 70 UAH per person'
    },
    reviews: [],
    relatedProductIds: [3, 4, 6],
    tags: ['junior-suite', 'two-room']
  }
];
