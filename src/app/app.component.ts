import { Component } from '@angular/core';
import { FilterComponent } from './filter-component/filter.component';
import { Filters, FilterObject } from './filter-component/filter.class';

export interface MatData {
  name: string;
  age: number;
  city: string;
}

const MAT_DATA: MatData[] = [
  {name: 'Mathieu', age: 29, city: 'Toulouse'},
  {name: 'Grégoire', age: 59, city: 'Limoge'},
  {name: 'Jean-Louis', age: 2, city: 'Paris'}
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  dataSource = null;
  displayedColumns = [];

  constructor() {
    this.dataSource.data = MAT_DATA;
    this.displayedColumns = Object.keys(MAT_DATA[0]);
  }

  applyFilter(filters: Filters) {
    /** trigger default behaviour for filtering MatTableDataSource's data */
    this.dataSource.filter = filters;
  }
}
