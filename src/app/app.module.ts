import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './Products/products.module';
import { SharedModule } from './Shared/shared.module';
import { RouterModule } from '@angular/router'; 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoreModule } from './Core/core.module';
import { AuthInterceptor } from './Core/intercepters/auth-intercepter';
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
    HttpClientModule,
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

  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
