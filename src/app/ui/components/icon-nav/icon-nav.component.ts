import {Component} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-nav',
  template: `<fa-icon [icon]="icon"></fa-icon>`
})
export class IconNavComponent {
  public icon = faBars;
}
