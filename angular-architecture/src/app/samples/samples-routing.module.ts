import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplesLayoutComponent } from './samples-layout/samples-layout.component';

const routes: Routes = [{
  path: 'samples',
  component: SamplesLayoutComponent,
  children: [
    { path: 'localization-support', loadChildren: './localization-support/localization-support.module#LocalizationSupportModule' },
    { path: '', loadChildren: './home/home.module#HomeModule' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
