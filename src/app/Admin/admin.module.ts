import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { SharedModule } from '../Shared/shared.module';


@NgModule({
  declarations: [
    AdminloginComponent,
    AdminhomeComponent,
    AdminProductsComponent,
    EditproductComponent,
    AddProductComponent,
    AdminUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
]
})
export class AdminModule { }
