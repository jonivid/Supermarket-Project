import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../models/OrderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  public userCity:string=""
  public userStreet:string=""
  constructor(private http: HttpClient) { }
  public getOrdersCount():Observable<any>{
    return this.http.get<any>("http://localhost:3001/orders/orderscount")
  }
  public getOrdersBusyDates(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3001/orders");
  }
  public completeOrder(orderDetails: OrderDetails,): Observable<any> {
    return this.http.post<OrderDetails>(
      'http://localhost:3001/orders/',
      orderDetails
    )}
}
