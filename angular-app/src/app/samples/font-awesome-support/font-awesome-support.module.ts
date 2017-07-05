import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { FontAwesomeSupportRoutingModule } from './font-awesome-support-routing.module';

import { FontAwesomeSupportPageComponent } from './font-awesome-support-page/font-awesome-support-page.component';

@NgModule({
  imports: [
    SharedModule,
    FontAwesomeSupportRoutingModule
  ],
  declarations: [FontAwesomeSupportPageComponent]
})
export class FontAwesomeSupportModule { }
