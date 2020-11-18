import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityService } from './security/security.service';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonsComponent } from './forms/radio-buttons/radio-buttons.component';
import { CounterInputComponent } from './forms/counter-input/counter-input.component';
import { AppHeaderComponent } from './dialogs/app-header/app-header.component';
import { InformationFilledModule, PlaneModule } from '@carbon/icons-angular';

@NgModule({
  declarations: [
    RadioButtonsComponent,
    CounterInputComponent,
    AppHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    PlaneModule,
    InformationFilledModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    RadioButtonsComponent,
    CounterInputComponent,
    AppHeaderComponent,
    PlaneModule,
    InformationFilledModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [SecurityService],
    };
  }
}
