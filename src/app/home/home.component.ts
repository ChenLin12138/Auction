import { Component, OnInit } from '@angular/core';
import { Product } from '../modules/product';
import { ProductService } from '../services/product.service';
import { FilterPipe } from '../filters/filter.pipe';
import { FormControl } from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products : Product[] = [];
  titleFilter : FormControl = new FormControl();
  filterCriteria : string;

  constructor(private productService : ProductService) { 
    this.products = this.productService.getProducts();
    //订阅输入框输入框的事件流，把input元素的值分配给过滤器
    this.titleFilter.valueChanges.pipe(debounceTime(500)).subscribe(
      value => this.filterCriteria = value,
      error => console.error(error)
      );

    this.productService.searchEvent.subscribe(params => this.productService.search(params), 
      err => console.log("Can't get products. Error code: %s, URL: %s"),
      () => console.log('DONE')
    );
  }

  ngOnInit(): void {
  }

}
