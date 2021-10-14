import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
})
export class ListOrderComponent implements OnInit {

  public title = "Commandes";
  public subtitle = "Toutes les commandes";

  constructor() { }

  ngOnInit(): void {
  }

}
