import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {

  @Input() count : number = 5;
  @Input() rating : number = 0;
  starts : boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 1 ; i <= this.count; i ++){
      this.starts.push(i > this.rating);
    }
  }

}
