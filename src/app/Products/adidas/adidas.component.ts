import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model'; 
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Core/Service/auth.Service';
import { ProductsService } from 'src/app/Core/Service/products.service';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.css']
})
export class AdidasComponent implements OnInit{
  adidasShoes:product[]=[]
  category:string;

  constructor(private activatedroute:ActivatedRoute,
              private productService:ProductsService,
              private authService: AuthService){}
  
  ngOnInit(): void {
  this.category=this.activatedroute.snapshot.paramMap.get('category')
    console.log(this.category);
    this.authService.showSearchBox=false
    this.loadAdidas();
  }

  loadAdidas():void{
    this.productService.getProductByCategory(this.category).subscribe(
      (Response:product[])=>{
        this.adidasShoes=Response;
        console.log(this.adidasShoes);
        
      }
    )
  }


}
