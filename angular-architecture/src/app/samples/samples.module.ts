import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesLayoutComponent } from './samples-layout/samples-layout.component';

@NgModule({
  imports: [
    CommonModule,
    SamplesRoutingModule
  ],
  declarations: [SamplesLayoutComponent]
})
export class SamplesModule { }
