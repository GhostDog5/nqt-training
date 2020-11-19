import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCircleComponent } from './step-circle.component';

describe('StepCircleComponent', () => {

  describe('(class tests)', () => {
    let component;

    beforeEach(() => {
      component = new StepCircleComponent();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should change label', () => {
      //given
      const label = '1';

      //when
      component.label = label;

      //then
      expect(component.label).toEqual(label);
    });
  });

  describe('(DOM tests)', () => {
    let component: StepCircleComponent;
    let fixture: ComponentFixture<StepCircleComponent>;
    let element: HTMLElement;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ StepCircleComponent ]
      })
      .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(StepCircleComponent);
      component = fixture.componentInstance;
      element = fixture.nativeElement as HTMLDivElement;
    });

    it('populates new input values to DOM', () => {
      //given
      const label = '1';
      component.label = label;
      fixture.detectChanges();

      //when
      const inputElement = element.querySelector<HTMLDivElement>('#circle-label');

      //then
      expect(inputElement.innerText).toEqual(label);
    });

  })
});
