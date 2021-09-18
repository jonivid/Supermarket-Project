import { CartItem } from './../models/CartItem';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  public cartItemList: CartItem[] = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  public currentCart: Cart = {};

  constructor(private http: HttpClient) {}

  public getCart(): Observable<Cart> {
    const result = this.http.get<Cart>(`http://localhost:3001/carts/`);
    return result;
  }

  public createNewCart(): Observable<Cart> {
    const cartDetails = {
      date: new Date().toLocaleString()
    };
    
    return this.http.post('http://localhost:3001/carts', cartDetails);
  }

  public addItemToCart(item: any): Observable<CartItem> {
    const index = this.cartItemList.findIndex(
      (itemFromList: any) => itemFromList.id == item.id
    );
    if (index != -1) {
      this.cartItemList[index].quantity = item.quantity;
      this.cartItemList[index].totalPrice = item.totalPrice;
      this.productList.next(this.cartItemList);
      let details ={
        item
      }
      return this.http.put(
        `http://localhost:3001/carts/items/`,details
      );

    } else {
      this.cartItemList = [...this.cartItemList];
      this.cartItemList.push(item);
      this.productList.next(this.cartItemList);
      return this.http.post<CartItem>('http://localhost:3001/carts/items', {
        id: this.currentCart.id,
        item,
      });
    }
  }

  public productsList() {
    return this.productList.asObservable();
  }

  public getProductsList(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(
      `http://localhost:3001/carts/items/`
    );
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
    return this.http.delete(
      `http://localhost:3001/carts/items/${product.id}`
    );
  }

  emptyCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    return this.http.delete(
      `http://localhost:3001/carts/items/`
    );
  }

  updateCart(item: any): any //  Observable<CartItem>
  {
    const index = this.cartItemList.findIndex(
      (itemFromList: any) => itemFromList.id == item.id
    );
    this.productList.next(this.cartItemList);
    let details ={
     item
    }
    return this.http.put(
      `http://localhost:3001/carts/items/`,details
    );
  }

  getTotalPrice(): any {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.totalPrice;
    });
    let grandTotalString = JSON.stringify(grandTotal).substring(0,5)
    return grandTotalString;
  }
}
