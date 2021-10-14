import {Component, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {Observable} from 'rxjs';
import {Order, OrderStateEnum} from '../../../shared/models/order';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
})
export class ListOrderComponent implements OnInit {

  public title = "Commandes";
  public subtitle = "Toutes les commandes";

  public states = Object.values(OrderStateEnum);
  public orders$: Observable<Order[]> = this.orderService.list$;
  headers: string[] = ['Type', 'Client', 'NbJours', 'TjmHT', 'Total HT', 'Total TTC', 'State', 'Action'];

  constructor(
    private orderService: OrderService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orderService.getListClient();
  }

  changeState(order: Order, state: any): void {
    this.orderService.update({...order, state})
      .subscribe((next) => order.state = next.state);
  }

  onButtonClick($event: MouseEvent): void {
    console.log($event);
  }

}
