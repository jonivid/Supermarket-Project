import { CartsService } from 'src/app/services/carts.service';
import { CartItem } from './../../models/CartItem';
import { Product } from './../../models/Product';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '@angular/router';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent implements OnInit {
  public quantity: number = 0;
  public totalPrice: number = 0;
  description?: Product;
  constructor(
    private dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) {}

  ngOnInit(): void {
    // console.log(this.data);
  }
  increment() {
    this.quantity++;
    this.totalPrice = this.quantity * (this.data.price || 0);
  }
  decrement() {
    if (this.quantity > 0) this.quantity--;
    this.totalPrice = this.quantity * (this.data.price || 0);
  }
  save() {
    this.dialogRef.close({
      item: this.data,
      totalPrice: this.totalPrice,
      quantity: this.quantity,
    });
  }
  close() {
    this.dialogRef.close();
  }
}
