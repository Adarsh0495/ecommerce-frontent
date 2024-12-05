import { Injectable, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { product } from '../Models/products.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService  {
  filteredProducts:product[]=[]
  viewedProduct: product[] = []
  toCartProducts: product[] = []

  constructor(private productsservice:ProductsService,private toast:ToastrService) { }

  filteringShoes(type:string){
const findProducts=this.productsservice.allProducts.filter(product=> {return product.type===type})
this.filteredProducts=findProducts
  }

  viewProducts(id:number){
let view=this.productsservice.allProducts.filter(product=>{return product.productid===id})
this.viewedProduct=view
console.log(view);

  }

  addToCart(id:number){
    const cartProduct=this.productsservice.allProducts.filter(product=>product.productid===id);
    
const productInCart=this.toCartProducts.find(product=>product.productid===id);
if(!productInCart){
  this.toCartProducts.push(cartProduct[0]);
  console.log(this.toCartProducts);
  
  this.toast.success('product added')
}else{
  this.toast.info('product already exist')
}
  }
}
