import { CartItem } from './../../models/CartItem';
import { Product } from './../../models/Product';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css'],
})
export class ProductsCardComponent implements OnInit {
  @Input() data: Product = new Product();
  popup: boolean = false;
  itemToCart: CartItem = {};

  constructor(private dialog: MatDialog, public cartService: CartsService) {}

  openDialog(data: Product): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(ProductModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => this.addToCart(data));
  }
  ngOnInit(): void {}
  addToCart(data: CartItem): void {
    if (data.quantity !== 0) {
      let observableCart = this.cartService.addItemToCart(data);
      observableCart.subscribe(
        (cartItem:CartItem) => {},
        (error:any) => {
          console.log(error);
        }
      );
    }
  }
}
