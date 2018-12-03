import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getGraph() {
    return this.graph;
  }

  setGraph(graph) {
    this.graph = graph;
  }

  graph: {};
}
