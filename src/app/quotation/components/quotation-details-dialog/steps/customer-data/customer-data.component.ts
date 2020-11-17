import {Component, Input} from '@angular/core';
import {Quotation} from '../../../../model';

@Component({
  selector: 'nqt-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent {
  @Input()
  quotation: Quotation;
}
