import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step } from '../quotation-details-dialog.component';

import { WizardStepComponent } from './wizard-step.component';

describe('WizardStepComponent', () => {
  describe('(class tests)', () => {
    let component: WizardStepComponent;

    beforeEach(() => {
      component = new WizardStepComponent();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should assign step and set active to be false', () => {
      // given
      const step: Step = {
        label: '1',
        title: 'Customer Data'
      };

      // when
      component.step = step;

      // then
      expect(component.step.label).toEqual('1');
      expect(component.step.title).toEqual('Customer Data');
      expect(component.active).not.toBeTruthy();
    });
  });

  describe('(DOM tests)', () => {
    let component: WizardStepComponent;
    let fixture: ComponentFixture<WizardStepComponent>;
    let element: HTMLElement;

    beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardStepComponent ]
    })
    .compileComponents();
    });

    beforeEach(() => {
    fixture = TestBed.createComponent(WizardStepComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
    });

    it('check if nqt-step-circle with label was created', () => {
      // given
      component.step = {
        label: '1',
        title: 'Customer Data'
      };
      fixture.detectChanges();

      // when
      const nqtStepCircleElement = element.querySelector<HTMLElement>('nqt-step-circle');

      // then
      expect(nqtStepCircleElement.innerHTML).toContain('>1<');
    });
  });
});
