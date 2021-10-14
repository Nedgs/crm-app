import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListOrderComponent, AddOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }
