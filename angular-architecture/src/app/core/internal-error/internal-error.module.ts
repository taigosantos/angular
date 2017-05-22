import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalErrorRoutingModule } from './internal-error-routing.module';
import { InternalErrorPageComponent } from './internal-error-page/internal-error-page.component';

@NgModule({
  imports: [
    CommonModule,
    InternalErrorRoutingModule
  ],
  declarations: [InternalErrorPageComponent]
})
export class InternalErrorModule { }
