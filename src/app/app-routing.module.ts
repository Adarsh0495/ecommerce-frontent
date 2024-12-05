import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './Userlogin/user-login/user-login.component';
import { NikeComponent } from './Products/nike/nike.component'; 
import { AdidasComponent } from './Products/adidas/adidas.component'; 
import { ConverseComponent } from './Products/converse/converse.component'; 
import { OtherComponent } from './Products/other/other.component'; 
import { PageNotfoundComponent } from './Core/page-notfound/page-notfound.component';
import { ProductDetailsComponent } from './Products/product-details/product-details.component'; 
import { CartComponent } from './Products/cart/cart.component'; 
import { authGuard } from './Core/guard/auth.guard';
import { UserRegistrationComponent } from './Userlogin/user-registration/user-registration.component';
import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { AddProductsComponent } from './Admin/add-products/add-products.component';
import { AdminUsersComponent } from './Admin/admin-users/admin-users.component';
import { adminGuard } from './Core/guard/admin.guard';

const routes: Routes = [
  { path: 'home', loadChildren:()=> import('./Core/core.module').then(m=>m.CoreModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'signup',component:UserRegistrationComponent},
  {path:'login',component:UserLoginComponent},
  {path:'allproducts',loadChildren:()=> import('./Products/products.module').then(m=>m.ProductsModule)},
  {path:'nike/:type',component:NikeComponent},
  {path:'adidas/:type',component:AdidasComponent},
  {path:'converse/:type',component:ConverseComponent},
  {path:'other/:type',component:OtherComponent},
  {path:'productview/:id',component:ProductDetailsComponent,canActivate:[authGuard]},
  {path:'adminlog',loadChildren:()=>import('./Admin/admin.module').then(m=>m.AdminModule)},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'adminproducts',component:AdminProductsComponent,canActivate:[adminGuard]},
  {path:'editproduct/:id',component:EditproductComponent,canActivate:[adminGuard]},
  {path:'addproducts',component:AddProductsComponent,canActivate:[adminGuard]},
  {path:'adminusers',component:AdminUsersComponent,canActivate:[adminGuard]},
  {path:'cart',component:CartComponent},
  {path:'**',component:PageNotfoundComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
