import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';
import { product } from 'src/app/Core/Models/products.model';
import { AdminService } from 'src/app/Core/Service/admin.service';
import { ProductsService } from 'src/app/Core/Service/products.service';

@Component({
  selector: 'app-admin-products',
  
  templateUrl:'./admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {
  isSideBarCollapsed: boolean = false
  adminProducts: product[]
  selectedProduct: product
  constructor(private poductService:ProductsService,private toast:ToastrService,private adminService:AdminService,private router:Router) {}

  ngOnInit(): void {
      this.loadProducts();

  }


  loadProducts(){
    this.adminService.getAllProducts().subscribe({
      next:(products)=>{
        this.adminProducts=products;
        console.log('Products loaded:', this.adminProducts);
        console.log(this.adminProducts);

      }
    })
  }


  deleteProduct(product: product):void {
      this.poductService.deleteProduct(product.productId).subscribe({
        next:(response)=>{
         this.adminProducts=this.adminProducts.filter(p=>p.productId !== product.productId)
         this.toast.success(response);
         console.log(response);
         
        },
        error: (err) => {
          console.error('Error deleting product:', err);
          let errorMessage = 'Failed to delete product.';
          if (err.status === 0) {
            errorMessage = 'CORS error or server not reachable.';
          } else if (err.status === 403) {
            errorMessage = 'Unauthorized: Admin access required.';
          } else if (err.status === 404) {
            errorMessage = 'Product not found.';
          }
          this.toast.error(errorMessage);
        }
      });
      
    
  }

  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

  
}
