import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeSupportRoutingModule } from './materialize-support-routing.module';
import { MaterializeIconsComponent } from './materialize-icons/materialize-icons.component';
import { MaterializeFormsComponent } from './materialize-forms/materialize-forms.component';
import { MaterializeLayoutComponent } from './materialize-layout/materialize-layout.component';
import { MaterializeModalComponent } from './materialize-modal/materialize-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeSupportRoutingModule
  ],
  declarations: [MaterializeIconsComponent, MaterializeFormsComponent, MaterializeLayoutComponent, MaterializeModalComponent]
})
export class MaterializeSupportModule { }
