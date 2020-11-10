import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../model/order';

@Component({
  selector: 'nqt-order-results',
  templateUrl: './order-results.component.html',
  styleUrls: ['./order-results.component.scss']
})
export class OrderResultsComponent {
  @Input()
  orders: Order[];
}
