import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UiComponent} from './components/ui/ui.component';
import {Ui2Component} from './components/ui2/ui2.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IconNavComponent} from './components/icon-nav/icon-nav.component';
import {FormsModule} from '@angular/forms';
import {IconEditComponent} from './components/icon-edit/icon-edit.component';
import {IconTrashComponent} from './components/icon-trash/icon-trash.component';


@NgModule({
  declarations: [UiComponent, Ui2Component, IconNavComponent, IconEditComponent, IconTrashComponent],
  exports: [
    UiComponent,
    IconNavComponent,
    IconEditComponent,
    IconTrashComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ]
})
export class UiModule {
}
