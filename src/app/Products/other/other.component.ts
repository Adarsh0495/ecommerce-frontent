import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Core/Service/auth.Service'; 
import { ProductsService } from 'src/app/Core/Service/products.service';
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  otherShoes:product[]=[]
  category:string;

  constructor(private activatedroute:ActivatedRoute,
              private productService:ProductsService,
              private authService: AuthService){}

  ngOnInit(): void {
  this.category= this.activatedroute.snapshot.paramMap.get('category');
    console.log(this.category);  
    this.authService.showSearchBox=false
    this.loadOtherShoes();
  }

  loadOtherShoes():void{
    this.productService.getProductByCategory(this.category).subscribe(
      (Response:product[])=>{
        this.otherShoes=Response;
        console.log(this.otherShoes);
        
      },
      
    )
  }
}
