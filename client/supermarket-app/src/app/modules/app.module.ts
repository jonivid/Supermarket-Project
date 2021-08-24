import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HomeComponent } from '../components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from '../interceptors/AuthenticationInterceptor';
import { AdminComponent } from '../components/admin/admin.component';
import { CustomerComponent } from '../components/customer/customer.component';
import { ProductsContainerComponent } from '../components/products-container/products-container.component';
import { ProductsCardComponent } from '../components/products-card/products-card.component';
import { LoginAndRegisterComponent } from '../components/login-and-register/login-and-register.component';
import { CategoriesPipe } from '../pipes/categories.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ByProductNamePipe } from '../pipes/by-product-name.pipe';
import { ProductModalComponent } from '../components/product-modal/product-modal.component';
import { CartContainerComponent } from '../components/cart-container/cart-container.component';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    CustomerComponent,
    ProductsContainerComponent,
    ProductsCardComponent,
    LoginAndRegisterComponent,
    CategoriesPipe,
    ByProductNamePipe,
    ProductModalComponent,
    CartContainerComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [AuthenticationInterceptor],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
