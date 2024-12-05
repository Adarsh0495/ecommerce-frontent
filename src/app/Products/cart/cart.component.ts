import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Core/Service/user.service'; 
import { ProductFilterService } from 'src/app/Core/Service/product-filter.service';
import { product } from 'src/app/Core/Models/products.model'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  totalPrice = 0;
  totalQuantity = 0
  cartProducts: product[] = []
  constructor(private userService: UserService, private filterService: ProductFilterService) {
  }
  ngOnInit(): void {
    this.userService.showSearchBox = false;
    this.userService.showCart = true
    this.cartProducts = this.filterService.toCartProducts
    this.updateTotalPrice()    
  }
  updateTotalPrice() {
    this.totalPrice = 0;
    this.totalQuantity = 0;
    for (let product of this.cartProducts) {
      this.totalQuantity += product.quantity
      this.totalPrice += product.quantity * product.productprice
    }
  }

  deleteProduct(product) {
    const index = this.cartProducts.indexOf(product)
    this.cartProducts.splice(index, 1)
    this.updateTotalPrice()
  }


}
