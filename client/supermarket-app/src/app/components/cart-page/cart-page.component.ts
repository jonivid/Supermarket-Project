import { OrderDetails } from './../../models/OrderDetails';
import { OrdersService } from './../../services/orders.service';
import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { FormControl, NgForm } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  public products: any = '';
  public productsString: any = '';
  public userOrderDetails: OrderDetails = new OrderDetails();
  cartItems: CartItem[] = [];
  public grandTotal: number = 0;
  public cartId?: any;
  public textToHighlight: string = '';
  public picker: Date = new Date();
  public takenDatesArray: Date[] = [];
  public fileUrl: any;
  public currentDate: Date = new Date();
  public orderNumber?:number
  public isModalOpen:boolean=false
  public isProgressBarOpen:boolean=false
  public isCompleteBtn:boolean=true

  constructor(
    public cartService: CartsService,
    public stateService: StateService,
    public usersService: UsersService,
    public ordersService: OrdersService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.cartService.productsList().subscribe((res) => {
      this.products=res
      let result = res.map((item: any) => {
        let p = `name : ${item.name}, price : ${item.price}, quantity : ${item.quantity}, totalPrice : ${item.totalPrice} `;
        return p;
      });
      this.productsString = JSON.stringify(result);
      this.grandTotal = this.cartService.getTotalPrice();
    });
    this.getOrdersBusyDates();
    
  }
 

  completeOrder(orderForm:NgForm) {

      this.userOrderDetails.orderDate = new Date();
      this.userOrderDetails.grandTotal = this.grandTotal;
      let observable = this.ordersService.completeOrder(this.userOrderDetails);
      observable.subscribe((res) => {
        console.log(res[0]);
        
        this.orderNumber=res[0].id
        
     
     
     let invoice = `Order number: ${this.orderNumber} 
     
     hey ${this.usersService.firstName} thank you for buying in VidalMarket
     
     Your order will be shipped to:
     City: ${this.userOrderDetails.city}
     Street: ${this.userOrderDetails.street}
     Shipping date: ${this.userOrderDetails.shippingDate?.toDateString()}

     Here is the list of item in your cart:
     `
     for(let product of this.products){
       invoice+= `${product.name} 
       Quantiy: ${product.quantity}
       Price: ${product.price}
       Total: ${product.totalPrice}
       `
     }
     invoice+= `
     Total Price: ${this.userOrderDetails.grandTotal} $ 
     
     See you again in your next buy

     `
      const blob = new Blob([invoice], {
        type: 'text/plain',
      });
      
      

        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          window.URL.createObjectURL(blob)
          );
          console.log(orderForm.disabled);
     if(!orderForm.disabled){
       this.isCompleteBtn=false
       this.isProgressBarOpen=true
       setTimeout(() => {
        this.isProgressBarOpen=false
        this.isModalOpen=true
       }, 5000);
    
        }

      });
  }

  acceptOrder() {
    this.cartService.emptyCart();
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
    const day = (d || new Date()).getDate();
    return !this.takenDatesArray.find((date) => date.getDate() == day );
  };
  public busyDatesStyle: MatCalendarCellClassFunction<Date> = (cellDate, view): string => {
    if (view === 'month') {
      const day = cellDate.getTime();

      return (this.takenDatesArray.find(date => date.getTime() == day + 7200000)) ? 'diabled-days' : '';
    }

    return '';
  }

  dblClickStreet(orderForm:NgForm) {
    orderForm.form.controls.street.setValue(this.ordersService.userStreet);
} 
 dblClickCity(orderForm:NgForm) {
    orderForm.form.controls.city.setValue(this.ordersService.userCity);
} 
}
