import { NewProduct } from 'src/app/models/NewProduct';
import { Observable } from 'rxjs';
import { Product } from './../models/Product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products: Product[] = [];
  public productToEdit?:Product

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3001/products');
  }
  public getProductsQuantity(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3001/products/quantity');
  }
  public createNewProduct(
    newProductDetails: NewProduct
  ): Observable<any> {
    return this.http.post<NewProduct>(
      'http://localhost:3001/products/',
      newProductDetails
    )}

    updateProduct(product: any): any 
    {
      return this.http.put(
        `http://localhost:3001/products`,product
      );
    }  
}
