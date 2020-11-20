import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotationGeneralInfoComponent } from './quotation-general-info.component';

xdescribe('QuotationGeneralInfoComponent', () => {
  let component: QuotationGeneralInfoComponent;

  describe('(class tests)', () => {
    beforeEach(async () => {
      component = new QuotationGeneralInfoComponent();
      component.quotation = {
        creationDate: new Date(),
        status: 'in progress',
        transportMode: 'air',
      };
    });

    it('gets a default value when id value is empty', () => {
      // given
      // when
      const idValue = component.getQuotationId();
      // then
      expect(idValue).toBe('New Quotation');
    });

    it('gets an id value when id value is not empty', () => {
      // given
      component.quotation.id = '123';
      // when
      const idValue = component.getQuotationId();
      // then
      expect(idValue).toBe('123');
    });

    it('gets a formatted date', () => {
      // given
      const date = new Date('2020-11-18T12:24:00');
      component.quotation.creationDate = date;

      spyOn(date, 'getDay').and.returnValue(18);
      spyOn(date, 'getMonth').and.returnValue(11);
      spyOn(date, 'getFullYear').and.returnValue(2020);
      // when
      const idValue = component.getFormattedDate();
      // then
      expect(idValue).toBe('18.11.2020');
    });
  });

  describe('(DOM tests)', () => {
    let fixture: ComponentFixture<QuotationGeneralInfoComponent>;
    let element: HTMLElement;

    beforeEach(async () => {
      return TestBed.configureTestingModule({
        declarations: [QuotationGeneralInfoComponent],
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(QuotationGeneralInfoComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement as HTMLElement;
    });

    it('populates new default value on DOM to the span', () => {
      // given
      component.quotation = {
        creationDate: new Date(),
        status: 'in progress',
        transportMode: 'air',
      };
      fixture.detectChanges();
      // when
      const spanElement = element.querySelector(
        '.quotation-id.quotation-id-date-properties'
      );
      // then
      expect(spanElement.textContent).toBe('New Quotation');
    });
  });
});
