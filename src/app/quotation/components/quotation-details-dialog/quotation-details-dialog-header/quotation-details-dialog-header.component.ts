import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Quotation} from '../../../model';

@Component({
  selector: 'nqt-quotation-details-dialog-header',
  templateUrl: './quotation-details-dialog-header.component.html',
  styleUrls: ['./quotation-details-dialog-header.component.scss']
})
export class QuotationDetailsDialogHeaderComponent {
  @Input()
  quotation: Quotation;

  @Output()
  saveClick = new EventEmitter<void>();

  notifyOnSaveClick(): void {
    this.saveClick.emit();
  }
}
