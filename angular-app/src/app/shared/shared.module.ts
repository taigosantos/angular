import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatCheckboxModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatOptionModule,
  MatRadioModule,
  MatAutocompleteModule
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

    // Material 2 Modules

    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatAutocompleteModule,

    // Flex Layout Modules

    FlexLayoutModule
  ],
  declarations: [
    // Layout Components

    PageLayoutComponent,
    PanelLayoutComponent,
    HeaderComponent,
    MainMenuComponent
  ],
  exports: [
    // Angular Modules

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Material 2 Modules

    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatAutocompleteModule,

    // Flex Layout Modules

    FlexLayoutModule,

    // Layouts components

    PageLayoutComponent,
    PanelLayoutComponent,
    MainMenuComponent
  ]
})
export class SharedModule {}
