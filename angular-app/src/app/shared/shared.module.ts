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
  MdSidenavModule,
  MdListModule
} from '@angular/material';

import { PanelLayoutComponent } from './components/panel-layout/panel-layout.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

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
    MdListModule,
    FlexLayoutModule

  ],
  declarations: [

    // Layout Components

    PageLayoutComponent,
    PanelLayoutComponent,
    HeaderComponent,
    MainMenuComponent,

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
    MdListModule,
    FlexLayoutModule,

    // Layouts components

    PageLayoutComponent,
    PanelLayoutComponent,
    MainMenuComponent

  ]
})
export class SharedModule { }
