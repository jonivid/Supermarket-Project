import { Component, OnInit } from '@angular/core';
import { NewProduct } from 'src/app/models/NewProduct';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  newProduct:NewProduct=new NewProduct()
  constructor() { }

  ngOnInit(): void {
  }

  uploadImg(event:any){
    
  }

  createProduct(){
    console.log(this.newProduct);
    
  }
}
