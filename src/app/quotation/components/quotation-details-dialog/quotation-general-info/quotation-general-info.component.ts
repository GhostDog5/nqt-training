import { Component, Input } from '@angular/core';
import { Quotation } from '../../../model';

@Component({
  selector: 'nqt-quotation-general-info',
  templateUrl: './quotation-general-info.component.html',
  styleUrls: ['./quotation-general-info.component.scss'],
})
export class QuotationGeneralInfoComponent {
  @Input()
  quotation: Quotation;

  getFormattedDate(): string {
    const date = this.quotation.creationDate;
    return `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`;
  }

  getQuotationId(): string {
    return this.quotation.id ?? 'New Quotation';
  }
}
