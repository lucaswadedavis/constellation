import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DbService } from '../db.service';


@Component({
  selector: 'app-graphs',
  inputs: ['title'],
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  childTitle = new FormControl(''); 
  graph: {};
  children = [];

  constructor(private dbService: DbService) {
  }

  ngOnInit() {
    this.getGraph();
  }

  getGraph(): void {
    this.graph = this.dbService.getGraph();
  }

  onClick() {
    this.children.unshift(this.childTitle.value); 
    this.childTitle.setValue('');
  }

}
