import {Routes} from '@angular/router';
import {OrderOverviewDialogComponent} from './components/order-overview-dialog/order-overview-dialog.component';

export const orderRoutes: Routes = [
  {
    path: 'orders',
    component: OrderOverviewDialogComponent
  }
];
