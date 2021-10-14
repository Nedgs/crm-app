import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListClientComponent} from './components/list-client/list-client.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';

const routes: Routes = [
  {path: '', component: ListClientComponent},
  {path: 'add', component: AddClientComponent},
  {path: 'edit/:id', component: EditClientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
