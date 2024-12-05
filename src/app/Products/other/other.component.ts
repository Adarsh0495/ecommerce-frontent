import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model';
import { ActivatedRoute } from '@angular/router';
import { ProductFilterService } from 'src/app/Core/Service/product-filter.service'; 
import { UserService } from 'src/app/Core/Service/user.service'; 
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  othershoe:product[]=[]
constructor(private activatedroute:ActivatedRoute,
            private filterservice:ProductFilterService,
            private userservice:UserService){}

ngOnInit(): void {
 const type= this.activatedroute.snapshot.paramMap.get('type');
  this.filterservice.filteringShoes(type);
  console.log(type);
  
  this.othershoe=this.filterservice.filteredProducts
  
  this.userservice.showSearchBox=false
}
}
