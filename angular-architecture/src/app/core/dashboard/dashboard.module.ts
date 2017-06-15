import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardPageComponent]
})
export class DashboardModule { }
