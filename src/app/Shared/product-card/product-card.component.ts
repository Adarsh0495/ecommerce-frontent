import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/Core/Models/cartItems';
import { product } from 'src/app/Core/Models/products.model'; 
import { CartService } from 'src/app/Core/Service/cart.service';
import { AuthService } from 'src/app/Core/Service/auth.Service'; 

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  isLoggIn:boolean;
  constructor(private cartService:CartService,
    private authService: AuthService,
  private toast:ToastrService){}
  @Input() product!:product

  ngOnInit(): void {
    this.isLoggIn=this.authService.isLogged

  }
  
  addToCart(productId: number): void {
    this.cartService.getCartItems().subscribe({ 
      next: (items:CartItem[]) => {
        console.log('Added to cart:', items);
        const exists = items.some(item => item.productId === productId);
        if (exists){
          this.toast.error("Product already exists")
        }
        else{
          this.cartService.addItemToCart(productId,1).subscribe({
            next:(items:CartItem[])=>{
              console.log('Added to cart:', items);
              this.toast.success("Product added to cart succesfully")

            }
          })
        }
      },
      error: (err) => console.error('Error adding to cart:', err)
    });
  }
}
