import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
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
      businessKey: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        startsWith('ABC')
      ]),
      description: new FormControl(),
      items: new FormControl(null, Validators.required)
    });

    const order = route.snapshot.data.order as Order | undefined;
    if (order) {
      this.orderForm.patchValue(order);
    }
  }

  getErrors(control: AbstractControl): string[] {
    const errors = (control && control.errors) || {};

    return Object.keys(errors).map(errorCode => {
      switch (errorCode) {
        case 'required':
          return 'Please provide a value';
        case 'minlength': {
          const errorMeta = errors[errorCode];
          return `The value is too short (${errorMeta.requiredLength}/${errorMeta.actualLength})`;
        }
        default:
          return 'Unknown error';
      }
    });
  }
}


function startsWith(prefix: string): ValidatorFn {
  // tslint:disable-next-line:only-arrow-functions
  return function(control: AbstractControl): ValidationErrors | null {
    const value = control?.value;
    if (value) {
      if (!value.startsWith(prefix)) {
        return {
          startsWithAbc: false
        };
      }
    }
    return null;
  };
}


