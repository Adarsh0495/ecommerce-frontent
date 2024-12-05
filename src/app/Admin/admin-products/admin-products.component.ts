import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model';
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
  constructor(private productService: ProductsService) { }
  ngOnInit(): void {
    this.adminProducts = this.productService.allProducts
  }
  toggleSideBar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

  deleteProduct(product: product) {
    this.productService.deleteProduct(product.productid)
  }
}
