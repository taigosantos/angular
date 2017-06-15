import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplesLayoutComponent } from './../shared/components/samples-layout/samples-layout.component';

const routes: Routes = [{
  path: 'samples',
  component: SamplesLayoutComponent,
  children: [
    { path: 'localization-support', loadChildren: './localization-support/localization-support.module#LocalizationSupportModule' },
    { path: 'materialize-support', loadChildren: './materialize-support/materialize-support.module#MaterializeSupportModule' },
    { path: 'font-awesome-support', loadChildren: './font-awesome-support/font-awesome-support.module#FontAwesomeSupportModule' },
    { path: '', loadChildren: './home/home.module#HomeModule' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
