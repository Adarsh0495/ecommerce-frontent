import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/Core/Models/products.model'; 
import { ActivatedRoute } from '@angular/router';
import { ProductFilterService } from 'src/app/Core/Service/product-filter.service'; 
import { UserService } from 'src/app/Core/Service/user.service';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrls: ['./adidas.component.css']
})
export class AdidasComponent implements OnInit{
  adidasshoes:product[]=[]
  constructor(private activatedroute:ActivatedRoute,
              private filterservice:ProductFilterService,
              private userservice:UserService){}
  
  ngOnInit(): void {
    let type=this.activatedroute.snapshot.paramMap.get('type')
    this.filterservice.filteringShoes(type)
    this.adidasshoes=this.filterservice.filteredProducts
    console.log(this.adidasshoes);
    this.userservice.showSearchBox=false
  }

}
