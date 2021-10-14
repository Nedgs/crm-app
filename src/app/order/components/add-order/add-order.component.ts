import {Component} from '@angular/core';
import {Order, OrderStateEnum} from '../../../shared/models/order';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrderService} from '../services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-order',
  template: `
  <app-template-a [title]="title" [subtitle]="subtitle">

    <div class="container">
      <app-form-order (submitted)="onSubmit($event)"></app-form-order>
    </div>

  </app-template-a>
`
})
export class AddOrderComponent  {


  public title = 'Commandes';
  public subtitle = 'Ajouter une commande';

  public order = {
    id: null,
    name: null,
    ca: 0,
    state: OrderStateEnum.OPTION
  };

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {
  }

  onSubmit(order: Order): void {
    this.orderService.create({...order})
      .subscribe(() => this.router.navigate(['/order']));
  }

}
