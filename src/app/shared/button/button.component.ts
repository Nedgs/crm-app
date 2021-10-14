import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button *ngIf="path" type="button" class="m-3 btn btn-primary" (click)="onClick($event)" [routerLink]="path">{{label}}</button>
    `
})
export class ButtonComponent {
  @Input() path: string[] | string | null = [];
  @Input() label?: string;

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  onClick($event: MouseEvent): void {
    this.buttonClick.emit($event);
  }
}
