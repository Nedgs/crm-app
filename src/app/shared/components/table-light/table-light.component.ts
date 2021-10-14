import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table-light',
  template: `
    <table class="table">
      <thead>
      <tr>
        <th scope="col" *ngFor="let header of headers">{{ header }}</th>
      </tr>
      </thead>
      <tbody>
      <ng-content></ng-content>
      </tbody>
    </table>
  `,
  styles: [`
    @import '../../../../stylings/theme';

    .tableau-light {
      .state-cancel, .state-inactive {
        background: $color-error;
      }

      .state-option {
        background: $color3;
      }

      .state-confirmed, .state-active {
        background: $color-success;
      }
    }

    app-template-a .tableau-light .state-option {
      background: $color1;
    }
  `]
})
export class TableLightComponent {
  @Input() headers: string[] = [];
}
