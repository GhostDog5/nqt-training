import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationDetailsDialogComponent } from './quotation-details-dialog.component';

describe('QuotationDetailsDialogComponent', () => {
  let component: QuotationDetailsDialogComponent;
  let fixture: ComponentFixture<QuotationDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('(class tests)', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should change property: active to be true', () => {
      component.toggle();
      expect(component.active).toBeTruthy();
    })
  });
});
