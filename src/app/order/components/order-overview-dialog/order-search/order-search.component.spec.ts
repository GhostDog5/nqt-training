import {OrderSearchComponent} from './order-search.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {OrderService} from '../../../services/order.service';


describe('OrderSearchComponent', () => {
  let orderServiceMock;

  beforeEach(() => {
    orderServiceMock = jasmine.createSpyObj(['getOne', 'search']);
  });

  describe('(class tests)', () => {
    it('populates input value to the form', () => {
      // given
      const component = new OrderSearchComponent();
      // when
      component.criteria = {businessKey: 'TestBK'};
      // then
      expect(component.searchForm.get('businessKey').value).toBe('TestBK');
    });

    it('notifies on criteria change', () => {
      // given
      const component = new OrderSearchComponent();
      component.criteria = {businessKey: 'TestBK'};
      component.criteriaChange.subscribe(updatedCriteria => {
        // then
        expect(updatedCriteria.businessKey).toBe('TestBK');
      });
      // when
      component.notifyOnCriteriaChange();
    });
  });

  describe('(DOM tests)', () => {
    let fixture: ComponentFixture<OrderSearchComponent>;
    let component: OrderSearchComponent;
    let element: HTMLElement;

    beforeEach(() => {
      return TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [OrderSearchComponent],
        providers: [{provide: OrderService, useValue: orderServiceMock}]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(OrderSearchComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement as HTMLElement;
    });

    it('populates new input values on DOM to the form', () => {
      // given
      component.criteria = {businessKey: 'TestBK'};
      fixture.detectChanges();
      // when
      const inputElement = element.querySelector<HTMLInputElement>('#businessKey');
      inputElement.value = 'NewBK';
      inputElement.dispatchEvent(new Event('input'));
      // then
      expect(component.searchForm.get('businessKey').value).toBe('NewBK');
    });

    it('notifies on criteria change', () => {
      // given
      fixture.detectChanges();
      const inputElement = element.querySelector<HTMLInputElement>('#businessKey');
      inputElement.value = 'NewBK';
      inputElement.dispatchEvent(new Event('input'));

      component.criteriaChange.subscribe(updatedCriteria => {
        // then
        expect(updatedCriteria.businessKey).toBe('NewBK');
        expect(orderServiceMock.getOne).toHaveBeenCalled();
      });
      // when
      const submitButton = element.querySelector<HTMLInputElement>('button');
      submitButton.click();
    });
  });
});
