import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { FilterChangeEvent } from '../../models/filterChangeEvent';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filterChanged = new EventEmitter<FilterChangeEvent>();

  emitFilterChanged(event: FilterChangeEvent) {
    this.filterChanged.emit(event);
  }

  clearFilters() {
    this.emitFilterChanged({});
  }

  constructor() {}
}
