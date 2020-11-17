import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, pluck, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Order, OrderSearch} from '../../model/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'nqt-order-overview-dialog',
  templateUrl: './order-overview-dialog.component.html',
  styleUrls: ['./order-overview-dialog.component.scss']
})
export class OrderOverviewDialogComponent {
  searchCriteria$: Observable<OrderSearch>;
  results$: Observable<Order[]>;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly orders: OrderService) {
    this.searchCriteria$ = route.params
      .pipe(
        pluck('businessKey'),
        map(
          businessKey => ({businessKey})
        ) // {businessKey: 'abc'}
      );

    this.results$ = this.searchCriteria$.pipe(
      switchMap(orderSearch => this.orders.search(orderSearch))
    );
  }

  updateUrlOnCriteria(newCriteria: OrderSearch): Promise<boolean> {
    return this.router.navigate([newCriteria], {
      relativeTo: this.route,
      replaceUrl: true
    });
  }
}
