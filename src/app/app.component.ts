import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-ui>
      <app-header class="header"></app-header>
      <app-footer class="footer"></app-footer>
      <app-nav class="sidemenu"></app-nav>
      <router-outlet class="content"></router-outlet>
    </app-ui>
  `
})
export class AppComponent {
}
