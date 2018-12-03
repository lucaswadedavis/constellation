import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-graphs',
  inputs: ['title'],
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  childTitle = new FormControl(''); 
  children = [];

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.children.unshift(this.childTitle.value); 
    this.childTitle.setValue('');
  }

}
