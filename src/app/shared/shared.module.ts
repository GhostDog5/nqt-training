import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecurityService} from './security/security.service';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RadioButtonsComponent} from './forms/radio-buttons/radio-buttons.component';
import {CounterInputComponent} from './forms/counter-input/counter-input.component';
import {AppHeaderComponent} from './dialogs/app-header/app-header.component';
import {AlarmAddModule, AppleModule, ArrowLeftModule} from '@carbon/icons-angular';

@NgModule({
  declarations: [RadioButtonsComponent, CounterInputComponent, AppHeaderComponent],
  imports: [
    CommonModule, RouterModule, TranslateModule
  ],
  exports: [CommonModule, RouterModule, TranslateModule, ReactiveFormsModule, RadioButtonsComponent, CounterInputComponent,
    AppHeaderComponent, AlarmAddModule, AppleModule, ArrowLeftModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [SecurityService]
    };
  }
}
