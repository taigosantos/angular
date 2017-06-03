import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizationSupportRoutingModule } from './localization-support-routing.module';
import { LocalizationSupportPageComponent } from './localization-support-page/localization-support-page.component';

@NgModule({
  imports: [
    CommonModule,
    LocalizationSupportRoutingModule
  ],
  declarations: [LocalizationSupportPageComponent]
})
export class LocalizationSupportModule { }
