import { Product } from './../../models/Product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  public prodcutToEdit:any={}
  constructor(public productsService: ProductsService,
    public categoriesService: CategoriesService,
    private router: Router,) {}

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
    console.log(this.productsService.productToEdit);
    this.prodcutToEdit=this.productsService.productToEdit
  }

  onChange(e: any) {
    this.prodcutToEdit.categoryId = e;
  }

  updateProduct(){
    
      let observable=this.productsService.updateProduct(this.prodcutToEdit)
      observable.subscribe((res:any)=>{})
      const index= this.productsService.products.findIndex(
        (item:any)=> item.id == this.prodcutToEdit.id

      )
      if (index != -1) {
        this.productsService.products=[...this.productsService.products]
        this.productsService.products[index]=this.prodcutToEdit
        }   

      this.router.navigate(['/admin']);
  
   
    console.log("updated",this.prodcutToEdit);
    
  }
}
