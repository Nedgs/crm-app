import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edit',
  template: '<fa-icon [icon]="icon"></fa-icon>'
})
export class IconEditComponent {
  public icon = faEdit;
}
