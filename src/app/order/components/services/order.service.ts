import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private list: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  get list$(): Observable<Order[]> {
    return this.list.asObservable();
  }

  constructor(
    private http: HttpClient
  ) {
  }

  getListClient(): void {
    this.http.get<Order[]>('http://localhost:3000/orders')
      .subscribe({
        next: (orders) => this.list.next(orders)
      });
  }



  update(order: Order): Observable<Order> {
    return this.http.put<Order>(`http://localhost:3000/clients/${order}`, order);
  }

  create(order: Order): Observable<Order> {
    return this.http.post<Order>(`http://localhost:3000/orders`, order);
  }




  get(id: string | null): Observable<Order | null> {
    if (id !== null) {
      return this.http.get<Order>(`http://localhost:3000/order/${id}`);
    }
    return of(null);
  }
}


