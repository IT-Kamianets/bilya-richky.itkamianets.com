import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/Product.model';

interface BookingFormData {
	fullName: string;
	phone: string;
	email: string;
	checkIn: string;
	checkOut: string;
	guests: number;
	roomPreference: string;
	message: string;
}

type BookingFormGroup = {
	fullName: FormControl<string>;
	phone: FormControl<string>;
	email: FormControl<string>;
	checkIn: FormControl<string>;
	checkOut: FormControl<string>;
	guests: FormControl<number>;
	roomPreference: FormControl<string>;
	message: FormControl<string>;
};

@Component({
	selector: 'app-form',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './form.html',
	styleUrls: ['./form.css'],
})
export class FormPage implements OnInit {
	checkoutForm: FormGroup<BookingFormGroup>;
	selectedProduct: Product | null = null;
	submitted = false;
	submittedData: BookingFormData | null = null;

	constructor(
		private fb: FormBuilder,
		private route: ActivatedRoute
	) {
		this.checkoutForm = this.fb.nonNullable.group({
			fullName: ['', Validators.required],
			phone: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			checkIn: ['', Validators.required],
			checkOut: ['', Validators.required],
			guests: [2, [Validators.required, Validators.min(1)]],
			roomPreference: [''],
			message: [''],
		});
	}

	ngOnInit() {
		this.route.queryParams.subscribe((params) => {
			const id = params['id'];
			if (id) {
				const found = PRODUCTS.find((p) => p.id === Number(id));
				if (found) {
					this.selectedProduct = found;
					this.checkoutForm.patchValue({ roomPreference: found.title });
				}
			}
		});
	}

	onSubmit() {
		if (this.checkoutForm.valid) {
			this.submitted = true;
			this.submittedData = this.checkoutForm.getRawValue();
		}
	}

	resetForm(): void {
		this.submitted = false;
		this.submittedData = null;
		this.checkoutForm.reset({
			fullName: '',
			phone: '',
			email: '',
			checkIn: '',
			checkOut: '',
			guests: 2,
			roomPreference: this.selectedProduct?.title || '',
			message: '',
		});
	}
}
