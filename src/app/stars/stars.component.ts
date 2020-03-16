import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {


  private _rating : number ;
  stars : boolean[];
  private maxStars : number = 5;

  @Input() readonly : boolean = true;

   //访问器
  @Input() get rating() : number {
    return this._rating;
  }

  //设置器
  set rating(value : number){
    this._rating = value || 0;
    this.stars = Array(this.maxStars).fill(true,0,this.rating);
  }

  //定义在子组件中，把此属性暴露给他的父组件
  @Output() ratingChange : EventEmitter<number> = new EventEmitter();

  fillStarsWithColor(index) {
    if(!this.readonly){
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

  ngOnInit(): void {}

  // @Input() count : number = 5;
  
  // @Input() rating : number = 0;
  // stars : boolean[] = [];

  // constructor() { }

  // ngOnInit(): void {
  //   for(let i = 1 ; i <= this.count; i ++){
  //     this.stars.push(i > this.rating);
  //   }
  // }

}
