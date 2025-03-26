import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './allproducts/allproducts.component';
import { NikeComponent } from './nike/nike.component';
import { AdidasComponent } from './adidas/adidas.component';
import { ConverseComponent } from './converse/converse.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
{path:'',component:AllProductsComponent},
{path:'nike/:category',component:NikeComponent},
{path:'adidas/:category',component:AdidasComponent},
{path:'converse/:category',component:ConverseComponent},
{path:'other/:category',component:OtherComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
