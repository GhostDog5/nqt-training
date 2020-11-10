import {Observable, of} from 'rxjs';
import {Order, OrderSearch} from '../model/order';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

interface OrderTo {
  businessKey: string;
  creationDate: string;
}

@Injectable()
export class OrderService {
  constructor(private readonly http: HttpClient) {
  }

  getOne(id: number): Observable<Order> {
    return this.http.get<OrderTo>(`rest/order/${id}`)
      .pipe(map(fromTo));
  }

  search(criteria: OrderSearch): Observable<Order[]> {
    // let params = new HttpParams();
    // if (businessKey) {
    //   params = params.append('key', businessKey);
    // }
    //
    // return this.http.get<OrderTo[]>(`rest/orders`, {params})
    //   .pipe(
    //     map(orderTos => orderTos.map(fromTo))
    //   );
    //
    return of([{
      businessKey: 'ABC1234',
      creationDate: new Date()
    }]);
  }
}

function fromTo(orderTo: OrderTo): Order {
  return {...orderTo, creationDate: new Date(orderTo.creationDate)};
}
