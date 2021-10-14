import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {UiModule} from '../ui/ui.module';
import {FooterComponent} from './components/footer/footer.component';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule
  ]
})
export class CoreModule { }
