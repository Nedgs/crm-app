import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Observable} from 'rxjs';
import {Client, ClientStateEnum} from '../../../shared/models/client';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html'
})
export class ListClientComponent implements OnInit {
  public title = 'Clients';
  public subtitle = 'Tout les clients';

  public states = Object.values(ClientStateEnum);
  public clients$: Observable<Client[]> = this.clientService.list$;
  headers: string[] = ['Nom', 'CA HT', 'CA TTC', 'Etat', 'Action'];

  constructor(
    private clientService: ClientService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.clientService.getListClient();
  }

  changeState(client: Client, state: any): void {
    this.clientService.update({...client, state})
      .subscribe((next) => client.state = next.state);
  }

  onButtonClick($event: MouseEvent): void {
    console.log($event);
  }

  deleteClient(client: Client): void {
    this.clientService.deleteClient({...client})
      .subscribe(() => this.router.navigate(['/client']));
  }



}
