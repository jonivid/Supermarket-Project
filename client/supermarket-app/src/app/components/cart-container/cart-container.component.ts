import { UsersService } from './../../services/users.service';
import { StateService } from './../../services/state.service';
import { CartsService } from 'src/app/services/carts.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css'],
})
export class CartContainerComponent implements OnInit {
  cartItems: CartItem[] = [];
  public products: any = [];
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
    this.cartService.updateCart(item).subscribe((res: any) => {});
  }

  completeOrder() {
    this.stateService.isCartContainer = false;
    this.router.navigate(['/cartpage']);
  }
}
