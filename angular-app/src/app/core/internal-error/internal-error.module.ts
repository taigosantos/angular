import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { InternalErrorRoutingModule } from './internal-error-routing.module';

import { InternalErrorPageComponent } from './internal-error-page/internal-error-page.component';

@NgModule({
  imports: [
    SharedModule,
    InternalErrorRoutingModule
  ],
  declarations: [InternalErrorPageComponent]
})
export class InternalErrorModule { }
