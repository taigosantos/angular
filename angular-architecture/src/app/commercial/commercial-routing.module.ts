import { PanelLayoutComponent } from './../core/panel-layout/panel-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
