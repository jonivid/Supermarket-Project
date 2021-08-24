import { CategoriesService } from 'src/app/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
})
export class ProductsContainerComponent implements OnInit {
  categoryFilter: any = 'all';
  public productName: string = '';
  constructor(
    public categoriesService: CategoriesService,
    public productsService: ProductsService
  ) {}

  ngOnInit(): void {
    let observableCategories = this.categoriesService.getAllCategories();
    observableCategories.subscribe(
      (categoriesList) => {
        this.categoriesService.categories = categoriesList;
      },
      (error) => {
        console.log(error);
      }
    );
    let observableProducts = this.productsService.getAllProducts();
    observableProducts.subscribe(
      (productsList) => {
        // console.log(productsList);
        this.productsService.products = productsList;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  filterByCategory(category: Category) {
    this.categoryFilter = category.name;
    // console.log(this.categoryFilter);
  }
  getAllProducts() {
    this.categoryFilter = 'all';
  }
}
