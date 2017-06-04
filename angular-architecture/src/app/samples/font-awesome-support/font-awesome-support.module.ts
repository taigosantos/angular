import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeSupportRoutingModule } from './font-awesome-support-routing.module';
import { FontAwesomeSupportPageComponent } from './font-awesome-support-page/font-awesome-support-page.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeSupportRoutingModule
  ],
  declarations: [FontAwesomeSupportPageComponent]
})
export class FontAwesomeSupportModule { }
