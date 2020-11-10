import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOverviewDialogComponent } from './order-overview-dialog.component';

describe('OrderOverviewDialogComponent', () => {
  let component: OrderOverviewDialogComponent;
  let fixture: ComponentFixture<OrderOverviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderOverviewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOverviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
