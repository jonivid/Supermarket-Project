import { ProductsService } from 'src/app/services/products.service';
import { CartItem } from './../../models/CartItem';
import { Product } from './../../models/Product';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { CartsService } from 'src/app/services/carts.service';
import { StateService } from 'src/app/services/state.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css'],
})
export class ProductsCardComponent implements OnInit {
  @Input() data: Product = new Product();
  popup: boolean = false;
  itemToCart: CartItem = {};
  public isAdmin: boolean = false;

  constructor(
    private dialog: MatDialog,
    public cartService: CartsService,
    public usersService: UsersService,
    public stateService: StateService,
    public productService:ProductsService,
    private router: Router,
  ) {}

  openDialog(data: Product): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    dialogConfig.position={top:"140px"}
    const dialogRef = this.dialog.open(ProductModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => this.addToCart(data),  (serverErrorResponse) => {
      alert(serverErrorResponse.error.error);
    });
  }
  ngOnInit(): void {

  }
  addToCart(data: CartItem): void {
    if (data.quantity !== 0) {
      let observableCart = this.cartService.addItemToCart(data);
      observableCart.subscribe(
        (cartItem: CartItem) => {},
        (serverErrorResponse) => {
          alert(serverErrorResponse.error.error);
        }
      );
    }
  }
  editProduct(data:Product){
    this.productService.productToEdit= data
    // this.router.navigate(['/editproduct']);
    this.stateService.isEditProduct=true
  }
}
