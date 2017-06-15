import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelLayoutComponent } from './../shared/components/panel-layout/panel-layout.component';

const routes: Routes = [{
  path: 'products',
  component: PanelLayoutComponent,
  children: [
    { path: '', loadChildren: './products/products.module#ProductsModule' }
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
