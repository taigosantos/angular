import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdCheckboxModule,
  MdInputModule,
  MdCardModule,
  MdButtonModule,
  MdSidenavModule
} from '@angular/material';

import { SamplesLayoutComponent } from './components/samples-layout/samples-layout.component';
import { PanelLayoutComponent } from './components/panel-layout/panel-layout.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [

    // Angular Modules

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Vendor Modules

    MdInputModule,
    MdCheckboxModule,
    MdCardModule,
    MdButtonModule,
    MdSidenavModule,
    FlexLayoutModule

  ],
  declarations: [

    // Layout Components

    PageLayoutComponent,
    PanelLayoutComponent,
    SamplesLayoutComponent,
    HeaderComponent,

  ],
  exports: [

    // Angular Modules

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Vendor Modules

    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdSidenavModule,
    FlexLayoutModule,

    // Layouts components

    PageLayoutComponent,
    PanelLayoutComponent,
    SamplesLayoutComponent

  ]
})
export class SharedModule { }
