import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model'; 
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Core/Service/auth.Service'; 
import { ProductsService } from 'src/app/Core/Service/products.service';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit{
  constructor(private activatedrout:ActivatedRoute,private productService:ProductsService,    private authService: AuthService){}
  nikeShoes:product[]=[]
  category:string;

  ngOnInit(): void {
  this.category=this.activatedrout.snapshot.paramMap.get('category')
  console.log(this.category);
  this.authService.showSearchBox=true
  this.loadNikeShoes();
  }

  loadNikeShoes():void{
    this.productService.getProductByCategory(this.category).subscribe(
      (Response:product[])=>{
        console.log(Response)
        this.nikeShoes=Response;
      }
      
      
    )
  }



}


