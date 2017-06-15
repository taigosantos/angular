import { NgModule } from '@angular/core';

import { MaterializeModule } from 'ng2-materialize';

import { SharedModule } from './../../shared/shared.module';
import { MaterializeSupportRoutingModule } from './materialize-support-routing.module';

import { MaterializeIconsComponent } from './materialize-icons/materialize-icons.component';
import { MaterializeFormsComponent } from './materialize-forms/materialize-forms.component';
import { MaterializeLayoutComponent } from './materialize-layout/materialize-layout.component';
import { MaterializeModalComponent } from './materialize-modal/materialize-modal.component';

@NgModule({
  imports: [
    SharedModule,
    MaterializeSupportRoutingModule,
    MaterializeModule.forRoot()
  ],
  declarations: [MaterializeIconsComponent, MaterializeFormsComponent, MaterializeLayoutComponent, MaterializeModalComponent]
})
export class MaterializeSupportModule { }
