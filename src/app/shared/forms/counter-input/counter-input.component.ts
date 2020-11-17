import {Component} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';

@Component({
  selector: 'nqt-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: CounterInputComponent, multi: true},
    {provide: NG_VALIDATORS, useExisting: CounterInputComponent, multi: true}
  ]
})
export class CounterInputComponent implements ControlValueAccessor, Validator {
  value: any;
  private onChangeFn;
  private onTouched;

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  valueChange($event: Event): void {
    const inputElement = $event.target as HTMLInputElement;
    const value = inputElement.value;
    this.value = value;
    this.onChangeFn(value);
  }

  decrement(): void {
    const valueAsNumber = +this.value;
    this.value = valueAsNumber - 1;
    this.onChangeFn(this.value);
  }

  increment(): void {
    const valueAsNumber = +this.value;
    this.value = valueAsNumber + 1;
    this.onChangeFn(this.value);
  }

  notifyOnTouched(): void {
    this.onTouched();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control?.value?.trim();
    if (value) {
      const valueAsNumber = +value;
      if (isNaN(valueAsNumber)) {
        return {
          notNumber: true
        };
      }
    }

    return null;
  }
}
