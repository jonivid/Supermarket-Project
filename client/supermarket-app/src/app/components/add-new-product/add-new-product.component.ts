import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewProduct } from 'src/app/models/NewProduct';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css'],
})
export class AddNewProductComponent implements OnInit {
  newProduct: NewProduct = new NewProduct();
  
  constructor(public categoriesService: CategoriesService, public productsService: ProductsService,
    private router: Router,
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
  }

  uploadImg(event: any) {}

  createProduct() {
    let observable=this.productsService.createNewProduct(this.newProduct)
    observable.subscribe((res)=>{})
    this.router.navigate(['/admin']);

  }
  onChange(e: any) {
    this.newProduct.categoryId = e;
  }
}
