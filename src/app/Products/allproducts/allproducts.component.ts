import { Component, OnInit } from '@angular/core';
import { product } from '../../Core/Models/products.model';
import { ProductsService } from '../../Core/Service/products.service';
import { UserService } from '../../Core/Service/user.service';
import { ProductFilterService } from '../../Core/Service/product-filter.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllProductsComponent implements OnInit {
  constructor(private productsservice:ProductsService,
    private userservice:UserService,
    private filterservice:ProductFilterService){}

  allProducts:product[]=[]
  searchArray:product[]=[]  
  searchData:string=''
  ifEnteredSearch: boolean = true
  isLogin:boolean

  ngOnInit():void {
    this.allProducts=this.productsservice.allProducts
    this.userservice.showSearchBox = true
    this.userservice.showCart = true
    this.isLogin=this.userservice.isLogged
 
  }
  onSearchEntered(searchValue: string) {
    this.searchData = searchValue
    console.log(this.searchData);

    this.searchArray = this.allProducts.filter((X) => { return X.productname.toLowerCase().includes(this.searchData.toLowerCase()) })
    console.log(this.searchArray);


    if (this.searchData.length === 0) {
      this.ifEnteredSearch
    } else {
      this.ifEnteredSearch = false
    }

  }

  addToCart(id:number){
this.filterservice.addToCart(id)

  }
 
}
  

