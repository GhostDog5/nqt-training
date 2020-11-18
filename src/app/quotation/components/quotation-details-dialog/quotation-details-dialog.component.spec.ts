import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotationService } from '../../services/quotation.service';

import { QuotationDetailsDialogComponent } from './quotation-details-dialog.component';

describe('QuotationDetailsDialogComponent', () => {
  let component: QuotationDetailsDialogComponent;
  let fixture: ComponentFixture<QuotationDetailsDialogComponent>;
  let quotationServiceMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationDetailsDialogComponent ],
      providers: [{provide: QuotationService, useValue: quotationServiceMock}],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationDetailsDialogComponent);
    component = fixture.componentInstance;
    quotationServiceMock = jasmine.createSpyObj(['saveQuotation', 'createQuotation']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
