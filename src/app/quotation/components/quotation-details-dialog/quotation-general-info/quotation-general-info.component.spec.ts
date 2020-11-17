import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationGeneralInfoComponent } from './quotation-general-info.component';

describe('QuotationGeneralInfoComponent', () => {
  let component: QuotationGeneralInfoComponent;
  let fixture: ComponentFixture<QuotationGeneralInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationGeneralInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
