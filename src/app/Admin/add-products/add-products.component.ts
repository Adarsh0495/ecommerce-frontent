import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/Core/Models/products.model';
import { ProductsService } from 'src/app/Core/Service/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {
  isSideBarCollapsed:boolean=false
  addedProducts:product[]=[]

  @ViewChild('addproductForm')addproductForm:NgForm

  constructor(private productsservice:ProductsService,private toast:ToastrService ,private router:Router){}

  toggleSideBar(){
    this.isSideBarCollapsed=!this.isSideBarCollapsed
  }
  
  onFormSubmitted(){
    if(this.addproductForm.valid){
    const addedProducts:product=this.addproductForm.value
    console.log(this.addproductForm.value);
    
    this.productsservice.allProducts.push(addedProducts)
    this.toast.success('Product added successfully.')
    this.router.navigate(['/adminproducts'])
    }else{
      this.toast.error('product not added')
    }
  }   
}
