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
    tva: 20,
    state: OrderStateEnum.OPTION

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
      // name: [this.init.name],
      // ca: [this.init.ca],
      state: [this.init.state]
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form?.value);
  }

}
