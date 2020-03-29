import { Injectable } from '@angular/core';
import { Product } from '../modules/product';
import { Review } from '../modules/review';
import { products } from '../../assets/products';
import { reviews} from '../../assets/reviews';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'http://localhost:8080/v1/products';

  constructor(private http : HttpClient) { }

  getProducts():  Array<Product> {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId : number) : Observable<Product>{
    // return this.http.get<Product>(this.productUrl+"/"+"productId");
    return this.http.get<Product>(this.productUrl);
  }

  getReviewsForProduct (productId : number ) : Review[]{
    return reviews.filter( r => r.productId === productId)
    .map(r => new Review (r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));
  }

  getAllCategories() : string[] {
    return ['Books', 'Electronics', 'Hardware'];
  }

}
