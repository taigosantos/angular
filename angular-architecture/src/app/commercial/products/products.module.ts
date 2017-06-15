import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports:[
    ProductsRoutingModule
  ],
  declarations: [ProductsListComponent, ProductsFormComponent]
})
export class ProductsModule { }
