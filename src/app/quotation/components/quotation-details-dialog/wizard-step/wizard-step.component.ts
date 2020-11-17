import {Component, Input} from '@angular/core';
import {Step} from '../quotation-details-dialog.component';

@Component({
  selector: 'nqt-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent {
  @Input()
  step: Step;

  @Input()
  active = false;
}
