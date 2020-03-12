import { Injectable } from '@angular/core';
import { Product } from '../modules/product';
import { Review } from '../modules/review';
import { products } from '../../assets/products';
import { reviews} from '../../assets/reviews';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts():  Array<Product> {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  getProductById(productId : number) : Product{
    return products.find(p =>p.id === productId);
  }

  getReviewsForProduct (productId : number ) : Review[]{
    return reviews.filter( r => r.productId === productId)
    .map(r => new Review (r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));
  }

}
