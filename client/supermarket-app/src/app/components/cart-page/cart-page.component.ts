import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  public products: any[] = [];

 
  cartItems: CartItem[] = [];
  public grandTotal: number = 0;
  public cartId?: any;
  constructor(
    public cartService: CartsService,
    public stateService: StateService,
    public userService: UsersService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.cartService.productsList().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item).subscribe((res) => {});
  }
  emptyCart() {
    this.cartService.emptyCart().subscribe((res) => {});
  }
  updateCart(event: any, item: any) {
    item.quantity = event.target.value;
    item.totalPrice = item.quantity * item.price;
    this.cartService.updateCart(item).subscribe((res:any) => {});
  }

  completeOrder(){
    this.router.navigate(['/cartpage']);
  }
}
