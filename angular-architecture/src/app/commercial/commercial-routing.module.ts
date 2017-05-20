import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent }
  //{ path: 'products', loadChildren: 'app/commercial/products/products.module#ProductsModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
