import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/Product.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class FormPage implements OnInit {
  checkoutForm: FormGroup;
  selectedProduct: Product | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      guests: [2, [Validators.required, Validators.min(1)]],
      roomPreference: [''],
      message: ['']
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      const rooms = Number(params['rooms'] || 1);
      if (id) {
        const found = PRODUCTS.find(p => p.id === Number(id));
        if (found) {
          this.selectedProduct = found;
          this.checkoutForm.patchValue({ roomPreference: found.title });
        }
      }

      if (rooms > 1) {
        const existing = this.checkoutForm.value.message || '';
        this.checkoutForm.patchValue({ message: `${existing} Requesting ${rooms} rooms.`.trim() });
      }
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      alert('Thank you! Your booking request was sent. We will confirm availability within 24 hours.');
      this.checkoutForm.reset({ guests: 2, roomPreference: this.selectedProduct?.title || '' });
      this.router.navigate(['/form']);
    }
  }
}

