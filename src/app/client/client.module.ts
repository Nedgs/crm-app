import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListClientComponent } from './components/list-client/list-client.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {AddClientComponent} from './components/add-client/add-client.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { FormClientComponent } from './components/form-client/form-client.component';
import {UiModule} from '../ui/ui.module';


@NgModule({
  declarations: [ListClientComponent, AddClientComponent, EditClientComponent, FormClientComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ]
})
export class ClientModule { }
