import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { SamplesHomeRoutingModule } from './samples-home-routing.module';

import { SamplesHomePageComponent } from './samples-home-page/samples-home-page.component';

@NgModule({
  imports: [
    SharedModule,
    SamplesHomeRoutingModule
  ],
  declarations: [SamplesHomePageComponent]
})
export class HomeModule { }
