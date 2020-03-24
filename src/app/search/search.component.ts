import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formModel : FormGroup = new FormGroup ({
    'title' : new FormControl(),
    'price' : new FormControl(),
    'category' : new FormControl()
  });
}