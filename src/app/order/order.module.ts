import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {OrderOverviewDialogComponent} from './components/order-overview-dialog/order-overview-dialog.component';
import { OrderSearchComponent } from './components/order-overview-dialog/order-search/order-search.component';
import { OrderResultsComponent } from './components/order-overview-dialog/order-results/order-results.component';
import {OrderService} from './services/order.service';

@NgModule({
  declarations: [OrderOverviewDialogComponent, OrderSearchComponent, OrderResultsComponent],
  imports: [
    SharedModule
  ]
})
export class OrderModule {
  static forRoot(): ModuleWithProviders<OrderModule> {
    return {
      ngModule: OrderModule,
      providers: [OrderService]
    };
  }
}
