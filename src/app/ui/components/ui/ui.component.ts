import {Component} from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent {
  users: any[] = [
    {name: 'Batman', display: true},
    {name: 'Superman', display: false}
  ];
  color: string = 'red';
  size: number = 12;

}
