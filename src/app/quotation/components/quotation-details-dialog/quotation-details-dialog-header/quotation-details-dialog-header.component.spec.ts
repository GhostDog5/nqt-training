import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationDetailsDialogHeaderComponent } from './quotation-details-dialog-header.component';

describe('QuotationDetailsDialogHeaderComponent', () => {
  let component: QuotationDetailsDialogHeaderComponent;
  let fixture: ComponentFixture<QuotationDetailsDialogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationDetailsDialogHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationDetailsDialogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
