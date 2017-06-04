import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'ng2-materialize';

import { MaterializeSupportRoutingModule } from './materialize-support-routing.module';
import { MaterializeIconsComponent } from './materialize-icons/materialize-icons.component';
import { MaterializeFormsComponent } from './materialize-forms/materialize-forms.component';
import { MaterializeLayoutComponent } from './materialize-layout/materialize-layout.component';
import { MaterializeModalComponent } from './materialize-modal/materialize-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeSupportRoutingModule,
    MaterializeModule.forRoot()
  ],
  declarations: [MaterializeIconsComponent, MaterializeFormsComponent, MaterializeLayoutComponent, MaterializeModalComponent]
})
export class MaterializeSupportModule { }
