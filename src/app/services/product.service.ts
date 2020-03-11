import { Injectable } from '@angular/core';
import { Product } from '../modules/product';
import { products } from '../../assets/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts():  Array<Product> {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  constructor() { }
}
