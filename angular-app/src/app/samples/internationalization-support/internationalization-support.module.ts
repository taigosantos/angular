import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { InternationalizationSupportRoutingModule } from './internationalization-support-routing.module';

import { InternationalizationSupportPageComponent } from './internationalization-support-page/internationalization-support-page.component';

@NgModule({
  imports: [
    SharedModule,
    InternationalizationSupportRoutingModule
  ],
  declarations: [InternationalizationSupportPageComponent]
})
export class InternationalizationSupportModule { }
