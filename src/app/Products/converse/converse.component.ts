import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model'; 
import { UserService } from 'src/app/Core/Service/user.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Core/Service/products.service'; 
import { ProductFilterService } from 'src/app/Core/Service/product-filter.service';

@Component({
  selector: 'app-converse',
  templateUrl: './converse.component.html',
  styleUrls: ['./converse.component.css']
})
export class ConverseComponent implements OnInit{
converseshoe:product[]=[]
constructor(private userserservice:UserService, 
            private activatedroute:ActivatedRoute,
            private filterservice:ProductFilterService){}

ngOnInit(): void {
  let type=this.activatedroute.snapshot.paramMap.get('type');
  this.filterservice.filteringShoes(type);
  this.converseshoe=this.filterservice.filteredProducts
this.userserservice.showSearchBox=false
}
}
