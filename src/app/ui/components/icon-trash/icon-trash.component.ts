import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-trash',
  template: '<fa-icon [icon]="icon"></fa-icon>'
})
export class IconTrashComponent {
  public icon = faTrash;
}
