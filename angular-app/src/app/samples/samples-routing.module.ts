import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelLayoutComponent } from './../shared/components/panel-layout/panel-layout.component';

const routes: Routes = [{
  path: 'samples',
  component: PanelLayoutComponent,
  children: [
    {
      path: 'internationalization-support',
      loadChildren: './internationalization-support/internationalization-support.module#InternationalizationSupportModule'
    },
    {
      path: 'localization-support',
      loadChildren: './localization-support/localization-support.module#LocalizationSupportModule'
    },
    {
      path: 'materialize-support',
      loadChildren: './materialize-support/materialize-support.module#MaterializeSupportModule'
    },
    {
      path: 'font-awesome-support',
      loadChildren: './font-awesome-support/font-awesome-support.module#FontAwesomeSupportModule'
    },
    {
      path: '',
      loadChildren: './samples-home/samples-home.module#SamplesHomeModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
