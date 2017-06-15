import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
