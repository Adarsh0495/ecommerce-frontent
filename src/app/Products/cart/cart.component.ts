import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/Service/auth.Service';
import { CartService } from 'src/app/Core/Service/cart.service'; 
import { product } from 'src/app/Core/Models/products.model';
import { CartItem } from 'src/app/Core/Models/cartItems';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts:CartItem[]= [];
  totalQuantity: number = 0;
  totalPrice: number = 0;
  @Input()product:product

  constructor(
    private authService: AuthService,
    private cartService: CartService 
  ) {}

  ngOnInit(): void {
    this.authService.showSearchBox = false;
    this.authService.showCart = true;
    this.loadCart();
  }  

  loadCart(): void {
    this.cartService.getCartItems().subscribe({
      next: (item:CartItem[]) => {
        this.cartProducts = item
        console.log("cart items",this.cartProducts);
        
        this.calculateTotals();
      },
      error: (err) => {
        console.error('Error loading cart:', err)
        this.cartProducts = []; 
        this.calculateTotals();
      }
    });
  }

  updateQuantity(product:CartItem):void{
    if(product.quantity<1){
      product.quantity=1
    }
    this.cartService.updateCartItemQuantity(product.cartId,product.quantity).subscribe({
      next:(item:CartItem[])=>{
        this.cartProducts=item
        this.calculateTotals();
      },
      error:(err)=>{
        console.error('Error updating quantity:', err);
        this.loadCart();
      }
    })
  }

  deleteProduct(product: CartItem): void {
    this.cartService.deleteCartItem(product.cartId).subscribe({
      next: (items: CartItem[]) => {
        this.cartProducts = items
        this.calculateTotals();
      },
      error: (err) => {
        console.error('Error deleting item:', err);
        this.loadCart(); 
      }
    });
  }

 
  clearCart(): void {
    this.cartService.clearCart().subscribe({
      next: (items: CartItem[]) => {
        this.cartProducts = items
        this.calculateTotals();
      },
      error: (err) => {
        console.error('Error clearing cart:', err);
        this.loadCart(); 
      }
    });
  }


calculateTotals(){
  this.totalQuantity=this.cartProducts.reduce((sum,item)=>sum+item.quantity,0);
  this.totalPrice=this.cartProducts.reduce((sum,item)=>sum+item.productPrice*item.quantity,0)
}
 
}