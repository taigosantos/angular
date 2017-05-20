import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRoutingModule } from './commercial-routing.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  imports: [
    CommonModule,
    CommercialRoutingModule,
    ProductsModule
  ],
  declarations: []
})
export class CommercialModule { }
