import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../modules/product';
import { Review } from '../modules/review';
import { StarsComponent } from '../stars/stars.component';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product;
  reviews : Review[];

  newComment : string;
  newRating : number;

  productService : ProductService;

  isReviewHidden : boolean = true;

  constructor(route : ActivatedRoute, productService : ProductService) {
    let prodId : number = parseInt(route.snapshot.params['productId']);
    // this.productService = productService;
    productService.getProductById(prodId).subscribe(p  => {
      this.product = p;
      this.reviews = productService.getReviewsForProduct(this.product.id);
    });
    // this.product = productService.getProductById(prodId);
    // this.reviews = productService.getReviewsForProduct(this.product.id);
   }


  addReview() {
    let review = new Review(0,this.product.id, new Date(), 'Anonymous', this.newRating, this.newComment);
    console.log("Adding review "+JSON.stringify(review));
    this.reviews = [...this.reviews, review];
    this.product.rating = this.averageRating(this.reviews);
  } 

  averageRating(reviews: Review[]) {
    let sum = reviews.reduce((average, review) => average + review.rating, 0);  
    return sum / reviews.length;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }

  ngOnInit(): void {
  }

}
