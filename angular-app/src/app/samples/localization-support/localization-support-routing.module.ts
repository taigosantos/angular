import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalizationSupportPageComponent } from './localization-support-page/localization-support-page.component';

const routes: Routes = [
  { path: '', component: LocalizationSupportPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalizationSupportRoutingModule { }
