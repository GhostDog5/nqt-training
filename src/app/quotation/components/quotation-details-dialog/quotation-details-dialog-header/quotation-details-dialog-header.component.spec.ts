import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationDetailsDialogHeaderComponent } from './quotation-details-dialog-header.component';

describe('QuotationDetailsDialogHeaderComponent', () => {

  describe('(Class tests)', () => {
    it('notifies on Save Quotation', () => {
      // given: component
      const component = new QuotationDetailsDialogHeaderComponent();

      // then:
      component.saveClick.subscribe(buttonPressed => {
          expect(true).toBeTruthy();
      });

      // when: event fired
      component.notifyOnSaveClick();
    });

    it('notifies on Back to Dashboard', () => {
      // given: component
      const component = new QuotationDetailsDialogHeaderComponent();

      // then:
      component.backToDashboardClick.subscribe(buttonPressed => {
          expect(true).toBeTruthy();
      });

      // when: event fired
      component.notifyOnBackToDashboard();
    });
  });

  describe('(DOM tests)', () => {
    let component: QuotationDetailsDialogHeaderComponent;
    let fixture: ComponentFixture<QuotationDetailsDialogHeaderComponent>;
    let element: HTMLElement;

    beforeEach(() => {
      return TestBed.configureTestingModule({
        declarations: [ QuotationDetailsDialogHeaderComponent ]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(QuotationDetailsDialogHeaderComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement as HTMLElement;
      fixture.detectChanges();
    });

    it('notifies on Save Quotation', () => {
      // given: save button
      fixture.detectChanges();
      const saveQuotationButton = element.querySelector<HTMLInputElement>('.saveQuotation');

      component.saveClick.subscribe(saveClicked => {
        // then:
        expect(true).toBeTruthy();
      });

      // when: save button clicked
      saveQuotationButton.click();
    });

    it('notifies on Back to Dashbord', () => {
      // given: Back to Dashbord button
      fixture.detectChanges();
      const backToDashboardButton = element.querySelector<HTMLInputElement>('.backToDashboard');

      component.backToDashboardClick.subscribe(backToDashboardClicked => {
        // then:
        expect(true).toBeTruthy();
      });

      // when: Back to Dashbord button clicked
      backToDashboardButton.click();
    });
  });
});
