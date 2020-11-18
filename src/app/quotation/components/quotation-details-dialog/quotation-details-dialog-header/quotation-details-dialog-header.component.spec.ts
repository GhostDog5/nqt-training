import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotationService } from 'src/app/quotation/services/quotation.service';

import { QuotationDetailsDialogHeaderComponent } from './quotation-details-dialog-header.component';

describe('QuotationDetailsDialogHeaderComponent', () => {
  let component: QuotationDetailsDialogHeaderComponent;
  let fixture: ComponentFixture<QuotationDetailsDialogHeaderComponent>;
  let element: HTMLElement;
  let quotationServiceMock;

  beforeEach(
    async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationDetailsDialogHeaderComponent ],
      providers: [{provide: QuotationService, useValue: quotationServiceMock}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationDetailsDialogHeaderComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
    quotationServiceMock = jasmine.createSpyObj(['saveQuotation', 'createQuotation']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service on Save Quotation clicked', () => {
    // given: save button
    const saveQuotationButton = element.querySelector<HTMLInputElement>('[saveQuotationButton]');

    component.saveClick.subscribe(saveClicked => {
      // then: service called
      expect(quotationServiceMock.createQuotation).toHaveBeenCalled();
    });

    // when: save button clicked
    saveQuotationButton.click();
  });
});
