import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
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
    private router: Router,private http: HttpClient
    ) {}

  ngOnInit(): void {
    let observableCategories = this.categoriesService.getAllCategories();
    observableCategories.subscribe(
      (categoriesList) => {
        this.categoriesService.categories = categoriesList;

      },
      (serverErrorResponse) => {
        alert(serverErrorResponse.error.error)
      }
    );
  }


  createProduct() {
    let observable=this.productsService.createNewProduct(this.newProduct)
    observable.subscribe((res)=>{},(serverErrorResponse) => {
      alert(serverErrorResponse.error.error)
    })
    this.router.navigate(['/admin']);
  }
  onChange(e: any) {
    this.newProduct.categoryId = e;
  }

}
