import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdCheckboxModule, MdInputModule, MdCardModule, MdButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    FlexLayoutModule,

    // Layouts components

    PageLayoutComponent,
    PanelLayoutComponent,
    SamplesLayoutComponent

  ]
})
export class SharedModule { }
