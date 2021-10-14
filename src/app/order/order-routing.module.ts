import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListOrderComponent} from './components/list-order/list-order.component';

const routes: Routes = [
  {path: '', component: ListOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
