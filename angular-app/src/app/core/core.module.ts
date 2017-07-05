import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  declarations: []
})
export class CoreModule {}