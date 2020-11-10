import {Routes} from '@angular/router';
import {OrderOverviewDialogComponent} from './components/order-overview-dialog/order-overview-dialog.component';
import {OrderDetailsDialogComponent} from './components/order-details-dialog/order-details-dialog.component';
import {OrderResolver} from './components/order-details-dialog/order.resolver';

export const orderRoutes: Routes = [
  {
    path: 'orders',
    component: OrderOverviewDialogComponent
  },
  {
    path: 'order',
    component: OrderDetailsDialogComponent
  },
  {
    path: 'order/:orderId',
    component: OrderDetailsDialogComponent,
    resolve: {
      order: OrderResolver
    }
  }
];
