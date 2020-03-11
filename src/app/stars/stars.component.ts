import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input() count : number = 5;
  @Input() rating : number = 0;
  stars : boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 1 ; i <= this.count; i ++){
      this.stars.push(i > this.rating);
    }
  }

}
