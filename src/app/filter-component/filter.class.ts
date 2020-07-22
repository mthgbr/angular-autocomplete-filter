export class FilterObject {
  constructor(
    private col: string,
    private ope: string,
    private key: string
  ) {}

  set colValue(value: string) {
    this.col = value;
  }
  get colValue(): string {
    return this.col;
  }
  set opeValue(value: string) {
    this.ope = value;
  }
  get opeValue() {
    return this.ope;
  }
  set keyValue(value: string) {
    this.key = value;
  }
  get keyValue() {
    return this.key;
  }

  valide(): boolean {
    if (this.freeColumn()) {
      return this.complete();
    } else if (this.onColumn()) {
      return 
        this.col && this.col.length > 0 &&
        this.ope && this.ope.length > 0 &&
        this.key && this.key.length > 0;
    }
  }

  complete(): boolean {
    return this.key && this.key.length > 0;
  }

  freeColumn(): boolean {
    return !this.col && this.key && this.complete();
  }

  onColumn(): boolean {
    return this.col && this.ope && this.key && this.complete();
  }
}

export class Filters {
  constructor(
    private list: Array<FilterObject> = [],
    private mode: 'and' | 'or' = 'and'
  ) {}

  get filterList() {
    return this.list;
  }

  set filter(filter: FilterObject) {
    this.list.push(filter);
  }

  set filterMode(mode: 'and' | 'or') {
    this.mode = mode;
  }

  complete(): boolean {
    return this.list.filter(
      filter => !filter.complete()
    ).length > 0;
  }

  next(): void {
    if (this.complete()) {
      this.createFilter('key', null);
    }
  }

  createFilter(field: string, value: string): void {
    switch (field) {
      case 'col': this.list.push(new FilterObject(value, null, null)); break;
      case 'key': this.list.push(new FilterObject(null, null, value)); break;
    }
  }

  updateFilter(index: number, field: string, value: string): void {
    if (!this.list[index]) {
      this.createFilter(field, value);
    } else if (this.list[index] && !this.list[index][field] && value) {
      this.list[index][field] = value;
    }
  }

  removeFilter(index: number) {
    this.list.splice(index, 1);
  }

  cleanFilter() {
    this.list = [];
  }
}