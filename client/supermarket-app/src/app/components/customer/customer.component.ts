import { StateService } from 'src/app/services/state.service';
import { Component, OnInit } from '@angular/core';
import { CartsService } from 'src/app/services/carts.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  public isCartOpen: number = 1;
  public isProductsListOn: boolean = false;
  public cartStatusMessage: string = '';
  constructor(
    public cartService: CartsService,
    public stateService: StateService
  ) {}

  ngOnInit(): void {
    let cartObservable = this.cartService.getCart(
      localStorage.getItem('userId')
    );
    cartObservable.subscribe(
      (cart) => {
        if (cart) {
          if (cart.status === 'open') {
            this.isCartOpen = 2;
            this.cartService.currentCart = cart;
            this.cartService.getProductsList().subscribe((res) => {
              this.cartService.cartItemList = res;
              this.cartService.productList.next(res);
            });
          } else if (cart.status === 'close') {
            this.cartStatusMessage =`Your last purchase was in: ${cart.dateCreated}`
            // let newCartObservable = this.cartService.createNewCart(
            //   localStorage.getItem('userId')
            // );
            // newCartObservable.subscribe(
            //   (cart) => {
                this.isCartOpen = 3;
            //     this.cartService.currentCart = cart;
            //   },
            //   (error) => {}
            // );
          }
        } else if (!cart) {
          this.cartStatusMessage = "Welcome to your first purchase"
          // let newCartObservable = this.cartService.createNewCart(
          //   localStorage.getItem('userId')
          // );
          // newCartObservable.subscribe(
          //   (cart) => {
              this.isCartOpen = 3;
          //     this.cartService.currentCart = cart;
          //   },
          //   (error) => {}
          // );
        }
      },
      (error) => {}
    );
  }
  toggleCartContainer() {
    this.isCartOpen = 1;
    this.isProductsListOn = true;
    this.stateService.isCartContainer = true;
    let newCartObservable = this.cartService.createNewCart(
      localStorage.getItem('userId')
    );
    newCartObservable.subscribe(
      (cart) => {
        // this.isCartOpen = 3;
        this.cartService.currentCart = cart;
      },
      (error) => {}
    );
  }
}
