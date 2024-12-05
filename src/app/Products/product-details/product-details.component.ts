import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model';
import { ActivatedRoute } from '@angular/router';
import { ProductFilterService } from 'src/app/Core/Service/product-filter.service'; 
import { UserService } from 'src/app/Core/Service/user.service'; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product:product[]=[]
  id:string
constructor(private activatedroute:ActivatedRoute,
            private filterservice:ProductFilterService,
            private userservice:UserService){}
  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.id);
    
    this.filterservice.viewProducts(parseInt(this.id));
    console.log(parseInt(this.id));
    
    this.product=this.filterservice.viewedProduct;
    this.userservice.showSearchBox=false;
    this.userservice.showCart=true
    console.log(this.product);
    
    
  }
  addToCart(){
    this.filterservice.addToCart(parseInt(this.id));
    
  }
}
