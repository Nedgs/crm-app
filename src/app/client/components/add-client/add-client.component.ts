import {Component} from '@angular/core';
import {Client, ClientStateEnum} from '../../../shared/models/client';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ClientService} from '../../services/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-client',
  template: `
    <app-template-a [title]="title" [subtitle]="subtitle">

      <div class="container">
        <app-form-client (submitted)="onSubmit($event)"></app-form-client>
      </div>

    </app-template-a>
  `,
})
export class AddClientComponent {
  public title = 'Clients';
  public subtitle = 'Ajouter un client';

  public client = {
    id: null,
    name: null,
    ca: 0,
    state: ClientStateEnum.INACTIF
  };

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {
  }

  onSubmit(client: Client): void {
    this.clientService.create({...client})
      .subscribe(() => this.router.navigate(['/client']));
  }
}
