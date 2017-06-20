import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplesHomePageComponent } from './samples-home-page/samples-home-page.component';

const routes: Routes = [
  { path: '', component: SamplesHomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesHomeRoutingModule { }
