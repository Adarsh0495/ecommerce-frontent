import { Component, OnInit } from '@angular/core';
import { product } from '../../Core/Models/products.model';
import { ProductsService } from '../../Core/Service/products.service';
import { AuthService } from '../../Core/Service/auth.Service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllProductsComponent implements OnInit {
  constructor(private productsservice:ProductsService,private authService: AuthService){}

  allProducts:product[]=[]
 

  ngOnInit():void {
    this.loadProducts();
    this.authService.showSearchBox = true
    this.authService.showCart = true
 
  }

loadProducts():void{
  this.productsservice.getAllProducts().subscribe({
    next:(products)=> {
      this.allProducts=products;
    },
    error:(err)=>{
      console.error("error loading products"+err);
      
    }
  })

}


  onSearchEntered(searchValue: string){
    if(searchValue.trim()===''){
      this.loadProducts()

    }else{
      this.productsservice.searchProducts(searchValue).subscribe({
        next:(products)=>{
          this.allProducts=products;
          console.log(this.allProducts);
          
        },
        error:(err)=>{
          console.error("Error searching products",err);
          
        }
      })
    }
  }

    

 

  }
 
  
  

