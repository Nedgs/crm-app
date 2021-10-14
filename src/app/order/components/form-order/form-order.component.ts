import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order, OrderStateEnum} from '../../../shared/models/order';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  @Input() init: Order = {
    id: null,
    typePresta: null,
    client: null,
    nbJours: 0,
    tjmHt: 0,
    tva: 20,
    state: OrderStateEnum.OPTION,
  };

  @Output() submitted: EventEmitter<Order> = new EventEmitter<Order>();
  public states = Object.values(OrderStateEnum);

  public form: FormGroup | null = null;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.init.id],
      typePresta: [this.init.typePresta],
      client: [this.init.client],
      nbJours: [this.init.nbJours],
      tjmHt: [this.init.tjmHt],
      tva: [this.init.tva],
      state: [this.init.state]
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form?.value);
  }

}
