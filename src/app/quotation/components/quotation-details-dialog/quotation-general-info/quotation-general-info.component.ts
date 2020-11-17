import {Component, Input} from '@angular/core';
import {Quotation} from '../../../model';

@Component({
  selector: 'nqt-quotation-general-info',
  templateUrl: './quotation-general-info.component.html',
  styleUrls: ['./quotation-general-info.component.scss']
})
export class QuotationGeneralInfoComponent {
  @Input()
  quotation: Quotation;
}
