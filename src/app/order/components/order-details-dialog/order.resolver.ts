import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Order} from '../../model/order';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {OrderService} from '../../services/order.service';

@Injectable()
export class OrderResolver implements Resolve<Order> {

  constructor(private readonly orders: OrderService,
              private readonly router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Order> {
    const orderIdAsString = route.paramMap.get('orderId');
    if (orderIdAsString) {
      const orderId = +orderIdAsString;
      if (!isNaN(orderId)) {
        return this.orders.getOne(orderId);
      }
    }
    this.router.navigateByUrl('/order');
  }
}
