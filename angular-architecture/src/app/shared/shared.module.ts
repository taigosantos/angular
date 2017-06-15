import { SamplesLayoutComponent } from './components/samples-layout/samples-layout.component';
import { PanelLayoutComponent } from './components/panel-layout/panel-layout.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PageLayoutComponent,
    PanelLayoutComponent,
    SamplesLayoutComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    PageLayoutComponent,
    PanelLayoutComponent,
    SamplesLayoutComponent
  ]
})
export class SharedModule { }
