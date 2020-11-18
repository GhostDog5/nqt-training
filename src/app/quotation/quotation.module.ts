import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { QuotationDetailsDialogComponent } from './components/quotation-details-dialog/quotation-details-dialog.component';
import { QuotationDetailsDialogHeaderComponent } from './components/quotation-details-dialog/quotation-details-dialog-header/quotation-details-dialog-header.component';
import { QuotationGeneralInfoComponent } from './components/quotation-details-dialog/quotation-general-info/quotation-general-info.component';
import { WizardStepComponent } from './components/quotation-details-dialog/wizard-step/wizard-step.component';
import { CustomerDataComponent } from './components/quotation-details-dialog/steps/customer-data/customer-data.component';
import { CustomerDataOverviewComponent } from './components/quotation-details-dialog/steps/customer-data-overview/customer-data-overview.component';
import { QuotationService } from './services/quotation.service';

@NgModule({
  declarations: [QuotationDetailsDialogComponent, QuotationDetailsDialogHeaderComponent, QuotationGeneralInfoComponent, WizardStepComponent, CustomerDataComponent, CustomerDataOverviewComponent],
  imports: [
    SharedModule
  ]
})
export class QuotationModule {
  static forRoot(): ModuleWithProviders<QuotationModule> {
    return {
      ngModule: QuotationModule,
      providers: [QuotationService]
    };
  }
}
