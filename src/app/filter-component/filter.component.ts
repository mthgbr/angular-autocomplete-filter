import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filters, FilterObject } from './filter.class';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() dataSource;
  @Input() columns;
  @Output() filtersEvent: EventEmitter<Filters> = new EventEmitter<Filters>();

  public filters: Filters;
  public formControl: FormControl;
  public formAutocomplete: string[];

  constructor() {
    this.filters = new Filters();
    this.formControl = new FormControl();
  }

  ngOnInit() {
  }

  formValidation($event: Event) {

  }

  formAutocompletion() {

  }

  removeFilter(index: number) {
    this.filters.removeFilter(index);
    /** send output filters */
    this.filtersEvent.emit(this.filters);
  }
}
