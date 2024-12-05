import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model'; 
import { ActivatedRoute } from '@angular/router';
import { ProductFilterService } from 'src/app/Core/Service/product-filter.service'; 
import { UserService } from 'src/app/Core/Service/user.service'; 

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrls: ['./nike.component.css']
})
export class NikeComponent implements OnInit{
  constructor(private activatedrout:ActivatedRoute,private filterservice:ProductFilterService,private userservice:UserService){}
nikeshoes:product[]=[]

ngOnInit(): void {
const type=this.activatedrout.snapshot.paramMap.get('type')
this.filterservice.filteringShoes(type)
this.nikeshoes=this.filterservice.filteredProducts;
this.userservice.showSearchBox=true

}
}
