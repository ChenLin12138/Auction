import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './modules/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'sales';
  products : Array<Product> = [];

  constructor(private productService : ProductService) {
    this.products = this.productService.getProducts();
  }

}
