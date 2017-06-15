import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { NotFoundRoutingModule } from './not-found-routing.module';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  imports: [
    SharedModule,
    NotFoundRoutingModule
  ],
  declarations: [NotFoundPageComponent]
})
export class NotFoundModule { }
