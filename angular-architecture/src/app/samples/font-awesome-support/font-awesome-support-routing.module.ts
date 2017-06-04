import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeSupportPageComponent } from './font-awesome-support-page/font-awesome-support-page.component';

const routes: Routes = [
  { path: '', component: FontAwesomeSupportPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontAwesomeSupportRoutingModule { }
