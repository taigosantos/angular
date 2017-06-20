import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SamplesLayoutComponent } from './components/samples-layout/samples-layout.component';
import { PanelLayoutComponent } from './components/panel-layout/panel-layout.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    PageLayoutComponent,
    PanelLayoutComponent,
    SamplesLayoutComponent,
    HeaderComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PageLayoutComponent,
    PanelLayoutComponent,
    SamplesLayoutComponent
  ]
})
export class SharedModule { }
