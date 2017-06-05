import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'ng2-materialize';

import { CoreRoutingModule } from './core-routing.module';
import { PanelLayoutComponent } from './panel-layout/panel-layout.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  imports: [
    MaterializeModule.forRoot(),
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [PanelLayoutComponent, PageLayoutComponent]
})
export class CoreModule {}