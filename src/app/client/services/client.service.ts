import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Client} from '../../shared/models/client';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private list: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);

  get list$(): Observable<Client[]> {
    return this.list.asObservable();
  }

  constructor(
    private http: HttpClient
  ) {
  }

  getListClient(): void {
    this.http.get<Client[]>('http://localhost:3000/clients')
      .subscribe({
        next: (clients) => this.list.next(clients)
      });
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`http://localhost:3000/clients/${client.id}`, client);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(`http://localhost:3000/clients`, client);
  }

  get(id: string | null): Observable<Client | null> {
    if (id !== null) {
      return this.http.get<Client>(`http://localhost:3000/clients/${id}`);
    }
    return of(null);
  }
}
