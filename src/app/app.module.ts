import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './Core/core.module';
import { ProductsModule } from './Products/products.module';
import { SharedModule } from './Shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserLoginComponent } from './Userlogin/user-login/user-login.component';
import { UserRegistrationComponent } from './Userlogin/user-registration/user-registration.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './Admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,

    
          
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CoreModule,
    ProductsModule,
    SharedModule,
    AdminModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      progressBar: true,
      closeButton:true,
      // easeTime:1000
      // disableTimeOut:true
      // newestOnTop:true
    }),
    
  
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
