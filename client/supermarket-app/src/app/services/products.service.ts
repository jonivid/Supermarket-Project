import { Observable } from 'rxjs';
import { Product } from './../models/Product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products: Product[] = [];

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3001/products');
  }
}
