import { OrderDetails } from './../../models/OrderDetails';
import { OrdersService } from './../../services/orders.service';
import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  public products: any = '';
  public userOrderDetails: OrderDetails = new OrderDetails();
  cartItems: CartItem[] = [];
  public grandTotal: number = 0;
  public cartId?: any;
  public textToHighlight: string = '';
  public picker: Date = new Date();
  public takenDatesArray: Date[] = [];
  public fileUrl: any;

  constructor(
    public cartService: CartsService,
    public stateService: StateService,
    public userService: UsersService,
    public ordersService: OrdersService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.cartService.productsList().subscribe((res) => {
      let result = res.map((item: any) => {
        let p = `name : ${item.name}, categoryName : ${item.categoryName}, price : ${item.price}, quantity : ${item.quantity}, totalPrice : ${item.totalPrice} <hr>`;
        return p;
      });
      this.products = JSON.stringify(result);
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  // removeItem(item: any) {
  //   this.cartService.removeCartItem(item).subscribe((res) => {});
  // }
  // emptyCart() {
  //   this.cartService.emptyCart().subscribe((res) => {});
  // }
  // updateCart(event: any, item: any) {
  //   item.quantity = event.target.value;
  //   item.totalPrice = item.quantity * item.price;
  //   this.cartService.updateCart(item).subscribe((res: any) => {});
  // }

  completeOrder() {
    this.userOrderDetails.orderDate = new Date();
    this.userOrderDetails.grandTotal = this.grandTotal;
    let observable = this.ordersService.completeOrder(this.userOrderDetails);
    observable.subscribe((res) => {});
    const blob = new Blob([this.products], {
      type: 'application/octet-stream',
    });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      window.URL.createObjectURL(blob)
    );
  }

  acceptOrder(){
    this.router.navigate(['/customer']);
  }




  getOrdersBusyDates(): void {
    let observable = this.ordersService.getOrdersBusyDates();
    observable.subscribe(
      (busyDates) => {
        busyDates.map((date) =>
          this.takenDatesArray.push(new Date(date.shipDate))
        );
      },
      (serverErrorResponse) => alert(serverErrorResponse.error.error)
    );
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getTime();
    return !this.takenDatesArray.find(
      (date) => date.getTime() == day + 7200000
    );
  };
}
