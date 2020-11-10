import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {OrderOverviewDialogComponent} from './components/order-overview-dialog/order-overview-dialog.component';
import {OrderSearchComponent} from './components/order-overview-dialog/order-search/order-search.component';
import {OrderResultsComponent} from './components/order-overview-dialog/order-results/order-results.component';
import {OrderService} from './services/order.service';
import {OrderDetailsDialogComponent} from './components/order-details-dialog/order-details-dialog.component';
import {OrderResolver} from './components/order-details-dialog/order.resolver';

@NgModule({
  declarations: [OrderOverviewDialogComponent, OrderSearchComponent, OrderResultsComponent, OrderDetailsDialogComponent],
  imports: [
    SharedModule
  ]
})
export class OrderModule {
  static forRoot(): ModuleWithProviders<OrderModule> {
    return {
      ngModule: OrderModule,
      providers: [OrderService, OrderResolver]
    };
  }
}
