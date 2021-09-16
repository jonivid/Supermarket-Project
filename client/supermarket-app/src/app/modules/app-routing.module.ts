import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from '../components/add-new-product/add-new-product.component';
import { AdminComponent } from '../components/admin/admin.component';
import { CartContainerComponent } from '../components/cart-container/cart-container.component';
import { CartPageComponent } from '../components/cart-page/cart-page.component';
import { CustomerComponent } from '../components/customer/customer.component';
import { EditProductComponent } from '../components/edit-product/edit-product.component';
import { LoginAndRegisterComponent } from '../components/login-and-register/login-and-register.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'home', component: LoginAndRegisterComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'cartpage', component:CartPageComponent},
  {path:'addnewproduct',component:AddNewProductComponent}, 
  {path:'editproduct',component:EditProductComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
