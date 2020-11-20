import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDataOverviewComponent } from './customer-data-overview.component';

xdescribe('CustomerDataOverviewComponent', () => {
  let component: CustomerDataOverviewComponent;
  let fixture: ComponentFixture<CustomerDataOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDataOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDataOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
