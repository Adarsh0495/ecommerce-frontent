import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model'; 
import { ProductFilterService } from 'src/app/Core/Service/product-filter.service'; 
import { UserService } from 'src/app/Core/Service/user.service'; 

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  isLoggIn:boolean;
  constructor(private filterservice:ProductFilterService,private userservice:UserService){}
  @Input() product:any

  ngOnInit(): void {
    this.isLoggIn=this.userservice.isLogged
  }
  addToCart(id:number){
this.filterservice.addToCart(id)
  }
}
