import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {path:'adminlog',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'adminproducts',component:AdminProductsComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'addproducts',component:AddProductComponent},
  {path:'adminusers',component:AdminUsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
