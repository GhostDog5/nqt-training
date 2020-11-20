import {Component, Input} from '@angular/core';
import { Observable } from 'rxjs';
import {Quotation} from '../../model';

export interface Step {
  label: string;
  title: string;
}

@Component({
  selector: 'nqt-quotation-details-dialog',
  templateUrl: './quotation-details-dialog.component.html',
  styleUrls: ['./quotation-details-dialog.component.scss']
})
export class QuotationDetailsDialogComponent {
  readonly quotation: Quotation;
  saveAction$: Observable<any>;
  active = false;

  toggle(): void {
    this.active = !this.active;
  }

  constructor() {
    this.quotation = {
      creationDate: new Date(),
      status: 'in progress',
      transportMode: 'air',
      customer: {
        name: 'KTM ebike',
        industry: 'Industry - ebike producer',
        adress: {
          city: 'Munchen Nord',
          street: 'Ingolstadter Str. 43',
          phoneNumber: '+49 567 578 394',
          email: 'ktm_ebike@ebike.com'
        }
      }
    };
  }

  saveQuotation(): void {
    console.log('Quotation saved.');
  }

}
