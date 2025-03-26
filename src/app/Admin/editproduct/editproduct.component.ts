import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/Core/Models/products.model';
import { ProductsService } from 'src/app/Core/Service/products.service';

@Component({
    selector: 'app-editproduct',
    templateUrl: './editproduct.component.html',
    styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
    productId: number;
    editProductForm: FormGroup;
    productImage: File | null = null;
    imagePreview: string | null = null;

    constructor(
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private productService: ProductsService,
        private router: Router,
        private toast: ToastrService
    ) {
        this.editProductForm = this.fb.group({
            category: ['', Validators.required],
            productName: ['', Validators.required],
            description: ['', Validators.required],
            productPrice: ['', [Validators.required, Validators.min(0)]],
            quantity: ['', [Validators.required, Validators.min(1)]]
        });
    }

    ngOnInit(): void {
        this.productId = +this.activatedRoute.snapshot.paramMap.get('id');
        this.loadProductDetails()
    }

    loadProductDetails():void{
        this.productService.getProductById(this.productId).subscribe({
            next:(product:product)=>{
                this.editProductForm.patchValue({
                    category: product.category,
                    productName: product.productName,
                    description: product.description,
                    productPrice: product.productPrice,
                    quantity: product.quantity
                })
                this.imagePreview=product.image||null;
                console.log('Image Preview Set To:', this.imagePreview);

                if(product.image){
                    this.imagePreview = product.image; // Should be full URL
                    console.log('Image Preview Set To:', this.imagePreview); // Debug log
                }
            },
            error: (err) => {
                console.error('Error fetching product:', err);
                this.toast.error('Failed to load product details.');
            }
        })
    }

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            this.productImage = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                this.imagePreview = reader.result as string;
                console.log('New Image Preview:', this.imagePreview); // Debug log
            };
            reader.readAsDataURL(this.productImage);
        } else {
            this.productImage = null;

            this.loadProductDetails();
        }
    }

    onFormSubmitted(): void {
        if (this.editProductForm.invalid) {
            this.toast.error('Please fill all required fields correctly.');
            return;
        }

        const formData = new FormData();
        const productData = {
            productName: this.editProductForm.value.productName,
            description: this.editProductForm.value.description,
            category: this.editProductForm.value.category,
            productPrice: parseFloat(this.editProductForm.value.productPrice),
            quantity: parseInt(this.editProductForm.value.quantity)
        };
        formData.append('productJson', JSON.stringify(productData));
        if (this.productImage) {
            formData.append('imageFile', this.productImage);
        }

        this.productService.updateProducts(this.productId, formData).subscribe({
            next: (response) => {
                this.toast.success('Product updated successfully!');
                this.router.navigate(['/adminproducts']);

            },
            error: (err) => {
                console.error('Update Product Error:', err);                
                this.toast.error('Failed to update product.');
            }
        });
    }

    cancel(): void {
        this.router.navigate(['/adminproducts']);
    }
}