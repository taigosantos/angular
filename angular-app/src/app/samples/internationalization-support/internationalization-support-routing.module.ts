import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternationalizationSupportPageComponent } from './internationalization-support-page/internationalization-support-page.component';

const routes: Routes = [
  { path: '', component: InternationalizationSupportPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternationalizationSupportRoutingModule { }
