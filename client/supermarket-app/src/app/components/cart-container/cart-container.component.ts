import { UsersService } from './../../services/users.service';
import { StateService } from './../../services/state.service';
import { CartsService } from 'src/app/services/carts.service';
import { Component, OnInit} from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css'],
})
export class CartContainerComponent implements OnInit {
  cartItems: CartItem[] = [];
  public products: any = [];
  public grandTotal: number=0;

  constructor(public cartService: CartsService , public stateService: StateService, public userService: UsersService ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
    
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  removeAllCart() {
    this.cartService.removeAllCart();
  }
}
