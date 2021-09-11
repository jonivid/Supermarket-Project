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
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CartPageComponent } from '../components/cart-page/cart-page.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { HighlightSearchPipe } from '../pipes/highlight-search.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AddNewProductComponent } from '../components/add-new-product/add-new-product.component';
import { EditProductComponent } from '../components/edit-product/edit-product.component';
import {MatInputModule} from '@angular/material/input';
import { AuthenticationInterceptor } from '../interceptors/AuthenticationInterceptor';

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
    CartPageComponent,
    AboutUsComponent,
    HighlightSearchPipe,
    AddNewProductComponent,
    EditProductComponent,
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
    MatTooltipModule,
    MatBadgeModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
