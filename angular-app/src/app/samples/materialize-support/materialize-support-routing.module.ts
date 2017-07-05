import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterializeModalComponent } from './materialize-modal/materialize-modal.component';
import { MaterializeLayoutComponent } from './materialize-layout/materialize-layout.component';
import { MaterializeIconsComponent } from './materialize-icons/materialize-icons.component';
import { MaterializeFormsComponent } from './materialize-forms/materialize-forms.component';

const routes: Routes = [
  { path: 'forms', component: MaterializeFormsComponent },
  { path: 'icons', component: MaterializeIconsComponent },
  { path: 'layout', component: MaterializeLayoutComponent },
  { path: 'modal', component: MaterializeModalComponent },
  { path: '', redirectTo: 'forms', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterializeSupportRoutingModule { }
