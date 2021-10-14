import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-template-a',
  template: `
   <div class="bandeau">
    <h1 class="app-text" *ngIf="title">{{ title }}</h1>
    <h2 class="app-text" *ngIf="subtitle">{{ subtitle }}</h2>
  </div>

  <ng-content></ng-content>`,
  styles: [`
    @import '../../../../stylings/theme';
    @import '../../../../stylings/fonts';

    .bandeau {
      background: $color1;
      padding: 1rem;
      h1 {
        color: var($light-color);
      }
    }

    div {
      display: block;
      padding: 10px;
    }

    h1, h2, h3, p, span, i, li {
      color: $light-color;
    }

    h1 {
      font-size: $h1-fz;
    }
    h2 {
      font-size: $h2-fz;
    }

    p, span, i, li {
      font-size: $regular-fz;
    }
  `]
})
export class TemplateAComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
}
