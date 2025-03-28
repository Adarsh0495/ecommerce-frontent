import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/Core/Service/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-product.component.html'
})
export class AddProductComponent {
  isSideBarCollapsed: boolean = false;
  isLoading: boolean = false; 
  addProductForm: FormGroup;
  productImage: File | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private toast: ToastrService,
    private router:Router
  ) {
    this.addProductForm = this.fb.group({
      
      category: ['', Validators.required],
      productName: ['', Validators.required],
      description: ['', Validators.required],
      productPrice: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.productImage = input.files[0];
      console.log('Selected file:', this.productImage.name, 'Size:', this.productImage.size);
    } else {
      this.productImage = null;
      console.log('No file selected');
    }
  }



  onFormSubmitted(): void {

    if (this.isLoading) {
      return; 
    }
    if (this.addProductForm.invalid) {
      this.toast.error('Please fill all required fields correctly.');
      return;
    }
  
    if (!this.productImage) {
      this.toast.error('Please select an image file.');
      return;
    }
  
    this.isLoading = true
    const formData = new FormData();
    const productData = {
      productName: this.addProductForm.value.productName,
      description: this.addProductForm.value.description,
      category: this.addProductForm.value.category,
      productPrice: parseFloat(this.addProductForm.value.productPrice),
      quantity: parseInt(this.addProductForm.value.quantity)
    };
  
    console.log('Product Data:', productData);
  
    formData.append('productJson', JSON.stringify(productData));
    formData.append('imageFile', this.productImage);
  
    this.productService.addProduct(formData).subscribe({
      next: (response) => {
        console.log('Product Added:', response);
        this.addProductForm.reset();
        this.toast.success('Product added successfully!');
        this.router.navigate(['/adminproducts']);
        this.productImage = null;
      },
      error: (err) => {
        console.error('Error adding product:', err);
        this.toast.error('Failed to add product: ' + (err.error?.message || 'Unknown error'));
      },
      complete: () => {
        this.isLoading = false; 
      }
    });
  }
}