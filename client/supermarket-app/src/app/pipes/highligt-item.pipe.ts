import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'highligtItem'
})
export class HighligtItemPipe implements PipeTransform {

  transform(products: Product[], productName: string): any {

    if (!productName || productName ==="" ) {
      products.forEach((product:any)=>{
          product.isHighlighted=false
       
      })
      return products;
    }
 
    products.forEach((product:any)=>{
      if(product.name?.toLowerCase().includes(productName.toLowerCase())){
        product.isHighlighted=true
      }
    
    })
    
    products.forEach((product:any)=>{
      if(!product.name?.toLowerCase().includes(productName.toLowerCase())){
        product.isHighlighted=false
      }
    
    })

    return products
  }
}
  // transform(value: any, args: any): any {
  //   if (!args) {
  //     return value;
  //   }

  //   const regex = new RegExp(args, 'gi');
  //   const match = value.match(regex);

  //   if (!match) {
  //     return value;
  //   }

  //   return value.replace(regex, `<span class='highlight'>${match[0]}</span>`);
    
  // }
  // transform(products: Product[], productName: string): any {
  //   return products.filter(product =>(product.name?.toLowerCase().includes(productName.toLowerCase())))
     
  // }