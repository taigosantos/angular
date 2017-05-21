import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalErrorPageComponent } from './internal-error-page/internal-error-page.component';

const routes: Routes = [
  { path: '', component: InternalErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalErrorRoutingModule { }
