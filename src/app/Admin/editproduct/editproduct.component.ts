import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/Core/Models/products.model';
import { ProductsService } from 'src/app/Core/Service/products.service';

@Component({
  selector: 'app-editproduct',
  
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent implements OnInit {
  isSideBarCollapsed:boolean=false
  productId: number
  product: product 
 
  constructor(private activatedroute:ActivatedRoute,private productsservice:ProductsService,private router:Router){}
  ngOnInit(): void {
    this.productId= +this.activatedroute.snapshot.paramMap.get('id');
    this.product=this.productsservice.allProducts.find(product=>product.productid==this.productId);
    console.log(this.productId);  
    
  }
  toggleSideBar(){
    this.isSideBarCollapsed = !this.isSideBarCollapsed;

  }

  saveChanges(){
    
      this.productsservice.updateProducts(this.productId,this.product)
      this.router.navigate(['/adminproducts'])
    


  }
}
