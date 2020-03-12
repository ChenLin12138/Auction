import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../modules/product';
import { Review } from '../modules/review';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product;
  reviews : Review[];
  // productTitle : string;

  constructor(route : ActivatedRoute, productService : ProductService) {
    let prodId : number = parseInt(route.snapshot.params['productId']);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(this.product.id);
   }

  ngOnInit(): void {
  }

}
