import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

type GalleryItem = {
  id: number;
  title: string;
  subtitle: string;
  tags: string[];
  imageUrl: string;
};

@Component({
  selector: 'app-gallery',
  imports: [NgFor, NgIf, RouterLink, FormsModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  searchTerm = '';
  selectedCategory = 'All categories';
  pageSize = 8;
  currentPage = 1;

  categories = [
    'All categories',
    'Exterior',
    'Territory',
    'Rooms',
    'Junior Suite',
    'Dining',
    'Heritage'
  ];

  items: GalleryItem[] = [
    {
      id: 1,
      title: 'Riverside facade',
      subtitle: 'Exterior and terraces by the canyon',
      tags: ['Exterior'],
      imageUrl: 'assets/img/bilya-richky/exterior/exterior-4.jpg',
    },
    {
      id: 2,
      title: 'Garden territory',
      subtitle: 'Green spaces for slow walks',
      tags: ['Territory'],
      imageUrl: 'assets/img/bilya-richky/exterior/exterior-2.jpg',
    },
    {
      id: 3,
      title: 'Landscaped paths',
      subtitle: 'Quiet corners around the property',
      tags: ['Territory'],
      imageUrl: 'assets/img/bilya-richky/exterior/exterior-3.jpg',
    },
    {
      id: 4,
      title: 'Riverside atmosphere',
      subtitle: 'Calm views and fresh air',
      tags: ['Exterior'],
      imageUrl: 'assets/img/bilya-richky/exterior/exterior-1.jpg',
    },
    {
      id: 5,
      title: 'Outdoor lounge',
      subtitle: 'Terraces for evening tea',
      tags: ['Territory'],
      imageUrl: 'assets/img/bilya-richky/exterior/exterior-5.jpg',
    },
    {
      id: 6,
      title: 'Standard double',
      subtitle: 'Warm wood interior',
      tags: ['Rooms'],
      imageUrl: 'assets/img/bilya-richky/rooms/standard-double_main.jpg',
    },
    {
      id: 7,
      title: 'Two-room Junior Suite (Semi-lux)',
      subtitle: 'Extra space with a two-room layout',
      tags: ['Junior Suite'],
      imageUrl: 'assets/img/bilya-richky/rooms/semi-lux_main.jpg',
    },
    {
      id: 8,
      title: 'Standard triple room',
      subtitle: 'Practical triple layout',
      tags: ['Rooms'],
      imageUrl: 'assets/img/bilya-richky/rooms/triple-standard_main.jpg',
    },
    {
      id: 9,
      title: 'Mansard double room (attic)',
      subtitle: 'Cozy attic-style interior',
      tags: ['Rooms'],
      imageUrl: 'assets/img/bilya-richky/rooms/mansard-double_main.jpg',
    },
    {
      id: 10,
      title: 'Double room details',
      subtitle: 'Simple and calm decor',
      tags: ['Rooms'],
      imageUrl: 'assets/img/bilya-richky/rooms/standard-double_alt-1.jpg',
    },
    {
      id: 11,
      title: 'Heritage surroundings',
      subtitle: 'Historic atmosphere nearby',
      tags: ['Heritage'],
      imageUrl: 'assets/img/bilya-richky/exterior/official-1.jpg',
    },
    {
      id: 12,
      title: 'Terrace view',
      subtitle: 'Seasonal light and greenery',
      tags: ['Exterior'],
      imageUrl: 'assets/img/bilya-richky/exterior/official-2.jpg',
    },
    {
      id: 13,
      title: 'Canyon side',
      subtitle: 'Textures of stone and trees',
      tags: ['Exterior'],
      imageUrl: 'assets/img/bilya-richky/exterior/official-3.jpg',
    },
    {
      id: 14,
      title: 'Dining atmosphere',
      subtitle: 'Ukrainian cuisine on site',
      tags: ['Dining'],
      imageUrl: 'assets/img/bilya-richky/dining/dining-1.jpg',
    }
  ];

  get filteredItems(): GalleryItem[] {
    const search = this.searchTerm.trim().toLowerCase();
    const category = this.selectedCategory;

    return this.items.filter((item) => {
      const matchesCategory =
        category === 'All categories' || item.tags.includes(category);

      if (!matchesCategory) {
        return false;
      }

      if (!search) {
        return true;
      }

      const haystack = `${item.title} ${item.subtitle} ${item.tags.join(' ')}`.toLowerCase();
      return haystack.includes(search);
    });
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredItems.length / this.pageSize));
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  get pagedItems(): GalleryItem[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredItems.slice(start, start + this.pageSize);
  }

  get hasResults(): boolean {
    return this.filteredItems.length > 0;
  }

  onFiltersChanged(): void {
    this.currentPage = 1;
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }
}
