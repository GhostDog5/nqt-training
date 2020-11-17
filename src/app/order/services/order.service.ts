import {Observable, of} from 'rxjs';
import {Order, OrderSearch} from '../model/order';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {delay} from 'rxjs/operators';

interface OrderTo {
  id: number;
  businessKey: string;
  creationDate: string;
}

@Injectable()
export class OrderService {
  constructor(private readonly http: HttpClient) {
  }

  getOne(id: number): Observable<Order> {
    // return this.http.get<OrderTo>(`rest/order/${id}`)
    //   .pipe(map(fromTo));

    return of({
      id,
      creationDate: new Date(),
      businessKey: `${id}-ABC`
    }).pipe(delay(2000));
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
      id: 1234,
      businessKey: 'ABC1234',
      creationDate: new Date()
    }]);
  }
}

function fromTo(orderTo: OrderTo): Order {
  return {...orderTo, creationDate: new Date(orderTo.creationDate)};
}
