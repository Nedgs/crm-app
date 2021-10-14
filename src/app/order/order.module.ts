import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ListOrderComponent } from './components/list-order/list-order.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UiModule} from '../ui/ui.module';
import { AddOrderComponent } from './components/add-order/add-order.component';

import { FormOrderComponent } from './components/form-order/form-order.component';


@NgModule({
  declarations: [ListOrderComponent, AddOrderComponent, FormOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class OrderModule { }
