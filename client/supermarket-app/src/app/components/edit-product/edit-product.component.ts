import { Category } from 'src/app/models/Category';
import { StateService } from 'src/app/services/state.service';
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
  public categoryName:string=""
  constructor(public productsService: ProductsService,
    public categoriesService: CategoriesService,
    private router: Router,private stateService:StateService) {}

  ngOnInit(): void {
    let observableCategories = this.categoriesService.getAllCategories();
    observableCategories.subscribe(
      (categoriesList) => {
        // console.log(categoriesList);
        
        this.categoriesService.categories = categoriesList;

      },
      (serverErrorResponse) => {
        alert(serverErrorResponse.error.error)
      }
    );
    this.prodcutToEdit=this.productsService.productToEdit
  }

  onChange(e: any) {
    this.prodcutToEdit.categoryName = e;
  }

  updateProduct(){
      this.prodcutToEdit.categoryId= this.categoriesService.categories.find((category)=>{
        return category.name === this.prodcutToEdit.categoryName
      })?.id
      
      let observable=this.productsService.updateProduct(this.prodcutToEdit)
      observable.subscribe((res:any)=>{},(serverErrorResponse:any) => {
        alert(serverErrorResponse.error.error)
      })
      const index= this.productsService.products.findIndex(
        (item:any)=> item.id == this.prodcutToEdit.id

      )
      if (index != -1) {
        this.productsService.products=[...this.productsService.products]
        this.productsService.products[index]=this.prodcutToEdit
        }   
      this.stateService.isEditProduct=false
      alert("update completed")  
  }
}
