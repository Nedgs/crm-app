import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <ul class="nav flex-column">
      <li class="nav-item" *ngFor="let link of links">
        <a class="nav-link" [routerLink]="link.path"
           routerLinkActive="active">
          {{link.label}}
        </a>
      </li>
    </ul>
  `,
  styles: [`
    a.nav-link.active {
      color: red;
      text-decoration: underline;
    }

    a.nav-link.active::before {
      content: '🦇';
      margin-right: 5px;
    }
  `]
})
export class NavComponent {
  links: { path: string; label: string }[] = [
    {path: '/client', label: 'Clients'},
    {path: '/order', label: 'Orders'},
    {path: '/login', label: 'Login'}
  ];
}

