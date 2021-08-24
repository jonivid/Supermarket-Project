import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'byProductName'
})
export class ByProductNamePipe implements PipeTransform {

  transform(products: Product[], productName: string): any {
    return products.filter(product =>(product.name?.toLowerCase().includes(productName.toLowerCase())))
  }

}
