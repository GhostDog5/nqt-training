import {Meta, Story} from '@storybook/angular/types-6-0';
import {RadioButtonsComponent} from '../radio-buttons.component';
import {moduleMetadata} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

export default {
  title: 'Example/RadioButtons',
  component: RadioButtonsComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ReactiveFormsModule],
      declarations: [RadioButtonsComponent]
    })
  ]
} as Meta;

const Template: Story<RadioButtonsComponent> = (args: RadioButtonsComponent) => ({
  component: RadioButtonsComponent,
  // props: {
  //   value: 'ABC',
  //   config: [{label: 'Classic', value: 'C'}, {label: 'Jazz', value: 'J'}]
  // },
  props: args,
  template: `
  <nqt-radio-buttons
    [formControl]="control"
    [config]="config">
    </nqt-radio-buttons>
  `
});

export const Base = Template.bind({});
Base.args = {
  value: 'ABC',
  control: new FormControl(),
  config: [{label: 'Classic', value: 'C'}, {label: 'Jazz', value: 'J'}]
};
