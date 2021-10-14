import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateAComponent } from './components/template-a/template-a.component';



@NgModule({
  declarations: [TemplateAComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateAComponent
  ]
})
export class TemplateModule { }
