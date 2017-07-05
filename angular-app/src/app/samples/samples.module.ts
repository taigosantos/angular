import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { SamplesRoutingModule } from './samples-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SamplesRoutingModule
  ],
  declarations: []
})
export class SamplesModule { }
