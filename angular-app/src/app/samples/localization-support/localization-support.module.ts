import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { LocalizationSupportRoutingModule } from './localization-support-routing.module';

import { LocalizationSupportPageComponent } from './localization-support-page/localization-support-page.component';

@NgModule({
  imports: [
    SharedModule,
    LocalizationSupportRoutingModule
  ],
  declarations: [LocalizationSupportPageComponent]
})
export class LocalizationSupportModule { }
