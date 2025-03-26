import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllProductsComponent } from "./allproducts/allproducts.component";
import { AdidasComponent } from "./adidas/adidas.component";
import { ConverseComponent } from "./converse/converse.component";
import { NikeComponent } from "./nike/nike.component";
import { OtherComponent } from "./other/other.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductsRoutingModule } from "./products-routing.module";
import { SharedModule } from "../Shared/shared.module";




@NgModule({
    declarations:[
        AllProductsComponent,
        AdidasComponent,
        ConverseComponent,
        NikeComponent,
        OtherComponent,
        CartComponent,
        ProductDetailsComponent
    ],
    imports:[
    CommonModule,
    FormsModule,
    SharedModule,
    ProductsRoutingModule,
    
    ]
})

export class ProductsModule { }