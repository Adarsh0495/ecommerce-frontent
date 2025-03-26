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
import { AdminhomeComponent } from './Admin/adminhome/adminhome.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { EditproductComponent } from './Admin/editproduct/editproduct.component';
import { AdminUsersComponent } from './Admin/admin-users/admin-users.component';
import { adminGuard } from './Core/guard/admin.guard';
import { AddProductComponent } from './Admin/add-product/add-product.component';

const routes: Routes = [
  {path: 'home', loadChildren:()=> import('./Core/core.module').then(m=>m.CoreModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'signup',component:UserRegistrationComponent},
  {path:'login',component:UserLoginComponent},
  {path:'allproducts',loadChildren:()=> import('./Products/products.module').then(m=>m.ProductsModule)},
  {path:'nike/:category',component:NikeComponent},
  {path:'adidas/:category',component:AdidasComponent},
  {path:'converse/:category',component:ConverseComponent},
  {path:'other/:category',component:OtherComponent},
  {path:'productview/:id',component:ProductDetailsComponent,canActivate:[authGuard]},
  {path:'adminlog',loadChildren:()=>import('./Admin/admin.module').then(m=>m.AdminModule)},
  {path:'adminhome',component:AdminhomeComponent,canActivate:[adminGuard]},
  {path:'adminproducts',component:AdminProductsComponent,canActivate:[adminGuard]},
  {path:'editproduct/:id',component:EditproductComponent,canActivate:[adminGuard]},
  {path:'addproducts',component:AddProductComponent,canActivate:[adminGuard]},
  {path:'admin/adminusers',component:AdminUsersComponent,canActivate:[adminGuard]},
  {path:'cart',component:CartComponent},
  {path:'**',component:PageNotfoundComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
