import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/Core/Models/cartItems';
import { product } from 'src/app/Core/Models/products.model';
import { CartService } from 'src/app/Core/Service/cart.service';
import { ProductsService } from 'src/app/Core/Service/products.service';
import { AuthService } from 'src/app/Core/Service/auth.Service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: product | null = null;
  productId: number;
  isLoading: boolean = true; 

  constructor(private activatedRoute: ActivatedRoute,
     private productService: ProductsService,
     private authService: AuthService,
     private cartService:CartService,
     private toast:ToastrService,
     private router:Router
    ) {
    this.productId = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log( this.productId);
    this.authService.showSearchBox = false;
    this.authService.showCart = true;
   if(!this.authService.isLogged){
    this.toast.warning('User not logged in.')
    this.router.navigate(['/login']);
    return;
   }
    this.loadProduct();
  }

  loadProduct(): void {
    this.isLoading = true; 
    this.productService.getProductByIdForUser(this.productId).subscribe({
      next: (response: product) => {
        this.product = response;
        this.isLoading = false; 
        console.log('Loaded Product:', this.product);
      },
      error: (err) => {
        console.error('Error loading product:', err);
        this.isLoading = false; 
        if (err.status === 401) {
          this.router.navigate(['/login'])
      }
    }})
  }

  addToCart(productId: number): void {
    this.cartService.getCartItems().subscribe({ 
      next: (items:CartItem[]) => {
        console.log('Added to cart:', items);
        const exists = items.some(item => item.productId === productId);
        if (exists){
          this.toast.info("Product already exists")
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


