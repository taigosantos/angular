import { NgModule } from '@angular/core';

import { MaterializeModule } from 'ng2-materialize';

import { SharedModule } from './../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    MaterializeModule.forRoot(),
    SharedModule,
    CoreRoutingModule
  ],
  declarations: []
})
export class CoreModule {}