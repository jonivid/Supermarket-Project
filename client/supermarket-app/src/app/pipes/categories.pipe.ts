import { Product } from 'src/app/models/Product';
import { Category } from 'src/app/models/Category';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories',
})
export class CategoriesPipe implements PipeTransform {
  transform(products: Product[], categoryName: Category): any {
    if(categoryName==="all") return products
    if(categoryName){
      return products.filter(product=> product.categoryName ==categoryName)
    }
  }
}
