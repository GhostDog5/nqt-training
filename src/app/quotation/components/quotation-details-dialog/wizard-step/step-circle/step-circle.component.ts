import { Component, Input } from '@angular/core';

@Component({
  selector: 'nqt-step-circle',
  templateUrl: './step-circle.component.html',
  styleUrls: ['./step-circle.component.scss']
})
export class StepCircleComponent {
  @Input()
  label: string;
}
