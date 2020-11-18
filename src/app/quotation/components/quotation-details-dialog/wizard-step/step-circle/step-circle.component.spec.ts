import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCircleComponent } from './step-circle.component';

describe('StepCircleComponent', () => {
  let component: StepCircleComponent;
  let fixture: ComponentFixture<StepCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
