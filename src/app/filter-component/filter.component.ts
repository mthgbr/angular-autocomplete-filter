import { Component, OnInit, Input, Output } from '@angular/core';
// import { Filters, FilterObject } from 'filter-class';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() dataSource;
  @Input() columns;

  constructor() { }

  ngOnInit() {
  }

}