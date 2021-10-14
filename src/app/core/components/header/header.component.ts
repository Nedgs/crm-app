import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <app-icon-nav style="cursor: pointer" (click)="toggle()">
    </app-icon-nav>
  `
})
export class HeaderComponent {

  toggle(): void {
    console.log('toggle');
  }

}
