import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderSearch} from '../../../model/order';

@Component({
  selector: 'nqt-order-search',
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderSearchComponent {
  @Input()
  set criteria(newCriteria: OrderSearch) {
    if (newCriteria) {
      this.searchForm.patchValue(newCriteria);
    }
  }

  @Output()
  criteriaChange = new EventEmitter<OrderSearch>();

  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      businessKey: new FormControl()
    });
  }

  notifyOnCriteriaChange(): void {
    this.criteriaChange.emit(this.searchForm.value);
  }
}
