import { Product } from 'src/app/models/Product';
import { CartItem } from './../models/CartItem';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  public cartItemList: CartItem[] = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}
  public addItemToCart(item: any): Observable<CartItem> {
    const index = this.cartItemList.findIndex(
      (itemFromList: any) => itemFromList.item.id == item.item.id
    );
    if (index != -1) {
      this.cartItemList[index].quantity = item.quantity;
      this.cartItemList[index].totalPrice = item.totalPrice;
    } else {
      this.cartItemList = [...this.cartItemList];
      this.cartItemList.push(item);
      this.productList.next(this.cartItemList);
    }
    return this.http.post<CartItem>('http://localhost:3001/carts/items', item);
  }

  public getProducts() {
    return this.productList.asObservable();
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.item.id === a.item.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.totalPrice;
    });
    return grandTotal;
  }
}
