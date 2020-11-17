import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export interface RadioButtonConfig {
  label: string;
  value: any;
}

@Component({
  selector: 'nqt-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RadioButtonsComponent,
    multi: true
  }]
})
export class RadioButtonsComponent implements ControlValueAccessor {
  @Input()
  config: RadioButtonConfig[];

  @Input()
  value: any;

  onChangeFn;

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(newValue: any): void {
    this.value = newValue;
  }

  setNewValue(newValue: any): void {
    this.value = newValue;
    this.onChangeFn(newValue);
  }
}
