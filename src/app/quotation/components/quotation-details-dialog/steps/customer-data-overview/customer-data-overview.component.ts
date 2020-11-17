import {Component, Input} from '@angular/core';
import {Quotation} from '../../../../model';

@Component({
  selector: 'nqt-customer-data-overview',
  templateUrl: './customer-data-overview.component.html',
  styleUrls: ['./customer-data-overview.component.scss']
})
export class CustomerDataOverviewComponent {
  @Input()
  quotation: Quotation;
}
