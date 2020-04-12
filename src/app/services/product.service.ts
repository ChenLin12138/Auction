import { Injectable } from '@angular/core';
import { Product } from '../modules/product';
import { Review,  } from '../modules/review';
import { ProductSearchParams } from '../modules/ProductSearchParams';
import { products } from '../../assets/products';
import { reviews} from '../../assets/reviews';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'http://localhost:8080/v1/products';

  searchEvent : EventEmitter<any> = new EventEmitter();

  constructor(private http : HttpClient) { }

  getProducts():  Array<Product> {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  //向REST API发送一个get请求，并在请求中带有参数。
  getProductById(productId : number) : Observable<Product>{
    return this.http.get<Product>(this.productUrl+"/"+productId);
  }

  //偷个懒，评论信息由本地提供。
  getReviewsForProduct (productId : number ) : Review[]{
    return reviews.filter( r => r.productId === productId)
    .map(r => new Review (r.id, r.productId, new Date(r.timestamp), r.user, r.rating, r.comment));
  }

  search(params : ProductSearchParams) : Observable<Product[]>{
    let paramsValue : string[]  = encodeParams(params);
    return this.http.get<Product[]>(this.productUrl+"/"+1);
    // return this.http.get<Product[]>(this.productUrl, {params : encodeParams(params)});
    // return this.http.get<Product[]>(this.productUrl, {params : encodeParams(params)});
  }
  

  getAllCategories() : string[] {
    return ['Books', 'Electronics', 'Hardware'];
  }
}

function encodeParams(params: ProductSearchParams) {
  return Object.keys(params)
      .filter(key => params[key])
      .reduce((json: any, key: string) => {
        json[key] = params[key];
        return json;
      }, []);
}
