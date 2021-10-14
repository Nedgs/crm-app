import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Client} from '../../../shared/models/client';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'app-edit-client',
  template: `
      <app-template-a [title]="title" [subtitle]="subtitle">

      <div class="container" *ngIf="client$ | async as client">
        <app-form-client (submitted)="onSubmit($event)"  [init]="client"></app-form-client>
      </div>

    </app-template-a>
  `,
})
export class EditClientComponent implements OnInit {
  public title = 'Clients';
  public subtitle = 'Editer un client';

  public client$: Observable<Client | null> = of(null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.client$ = this.clientService.get(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  onSubmit(client: Client): void {
    this.clientService.update({...client}).
      subscribe(() => this.router.navigate(['/client']));
  }

}
