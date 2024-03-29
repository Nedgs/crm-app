import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './components/add-order/add-order.component';
import {ListOrderComponent} from './components/list-order/list-order.component';

const routes: Routes = [
  {path: '', component: ListOrderComponent},
  {path: 'add', component: AddOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
