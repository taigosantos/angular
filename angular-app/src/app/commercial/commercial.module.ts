import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CommercialRoutingModule } from './commercial-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CommercialRoutingModule
  ],
  declarations: []
})
export class CommercialModule { }
