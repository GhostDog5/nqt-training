import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationDetailsDialogComponent } from './quotation-details-dialog.component';

describe('QuotationDetailsDialogComponent', () => {
  let component: QuotationDetailsDialogComponent;
  let fixture: ComponentFixture<QuotationDetailsDialogComponent>;
  let quotationServiceMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationDetailsDialogComponent ]
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

  it('should call service to create new quotation', () => {
    // TODO: implement test
  });

  it('should call service to save quotation for existing quotation', () => {
    // TODO: implement test
  });

});
