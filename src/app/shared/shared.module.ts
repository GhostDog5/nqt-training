import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecurityService} from './security/security.service';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, RouterModule, TranslateModule
  ],
  exports: [CommonModule, RouterModule, TranslateModule, ReactiveFormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [SecurityService]
    };
  }
}
