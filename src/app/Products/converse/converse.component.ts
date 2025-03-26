import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model'; 
import { AuthService } from 'src/app/Core/Service/auth.Service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Core/Service/products.service'; 
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-converse',
  templateUrl: './converse.component.html',
  styleUrls: ['./converse.component.css']
})
export class ConverseComponent implements OnInit{
converseShoe:product[]=[]
type:string;
constructor(private authService: AuthService,
            private activatedroute:ActivatedRoute,
            private productService:ProductsService){

            }

  ngOnInit(): void {
  this.authService.showSearchBox=false
  this.type=this.activatedroute.snapshot.paramMap.get('category');
  console.log(this.type);
  this.loadCatagery();

  }

  loadCatagery():void{
    this.productService.getProductByCategory(this.type).subscribe({
      next:(Response:product[])=>{
        this.converseShoe=Response;
  }

    })
  }
}
