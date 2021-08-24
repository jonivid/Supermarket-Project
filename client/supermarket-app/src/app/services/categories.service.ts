import { Category } from 'src/app/models/Category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public categories: Category[] = [];

  constructor(private http: HttpClient) {}

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3001/categories');
  }
}
