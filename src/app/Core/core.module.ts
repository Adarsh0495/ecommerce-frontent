import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { PageNotfoundComponent } from "./page-notfound/page-notfound.component";
import { CommonModule } from "@angular/common";
import { CoreRoutingModule } from "./core-routing.module";
import { UserLoginComponent } from "../Userlogin/user-login/user-login.component";
import { UserRegistrationComponent } from "../Userlogin/user-registration/user-registration.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../Shared/shared.module";




@NgModule({
    declarations:[
        HomeComponent,
        PageNotfoundComponent,
        UserLoginComponent,
        UserRegistrationComponent,
    ],
    imports:[
        CommonModule,
        SharedModule,
        CoreRoutingModule,
        FormsModule
        
    ]
})

export class CoreModule { }