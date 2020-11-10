import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../services/order.service';
import {Order} from '../../model/order';

@Component({
  selector: 'nqt-order-details-dialog',
  templateUrl: './order-details-dialog.component.html',
  styleUrls: ['./order-details-dialog.component.scss']
})
export class OrderDetailsDialogComponent {

  orderForm: FormGroup;

  constructor(route: ActivatedRoute) {
    this.orderForm = new FormGroup({
      businessKey: new FormControl(),
      description: new FormControl()
    });

    const order = route.snapshot.data.order as Order | undefined;
    if (order) {
      this.orderForm.patchValue(order);
    }
  }
}
