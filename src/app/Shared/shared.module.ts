import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ProductCardComponent } from "./product-card/product-card.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SidenavComponent } from "./sidenav/sidenav.component";

@NgModule({
    declarations:[
        NavbarComponent,
        FooterComponent,
        ProductCardComponent,
        SidenavComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([])
    ],

    exports:[
        ProductCardComponent,FooterComponent,NavbarComponent,SidenavComponent
    ]
})

export class SharedModule { }