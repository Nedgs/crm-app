import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplateModule} from '../template/template.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { ButtonComponent } from './button/button.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    TableLightComponent,
    TotalPipe,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    TemplateModule,
    RouterModule
  ], exports: [
    TemplateModule,
    TableLightComponent,
    TotalPipe,
    ButtonComponent
  ]
})
export class SharedModule { }
