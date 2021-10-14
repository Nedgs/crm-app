import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule} from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    AngularCommonModule
  ]
})
export class CommonModule { }
