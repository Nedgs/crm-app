import { Pipe, PipeTransform } from '@angular/core';
import {Client} from '../models/client';
import { Order } from '../models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Client | Order, ...args: string[]): number | null {
    if (value) {
      if(args && args[0] === 'ttc')
      {
        const order: Order = value as Order 
        return (order.nbJours * order.tjmHt) * (1 + order.tva / 100);
      }
      if(args && args[0] === undefined)
      {
        const order: Order = value as Order 
        return (order.nbJours * order.tjmHt);
      }
      else if (args && args[0] === 'cattc') {
        const client: Client = value as Client 
        return client.ca ? client.ca  * (1 + 20 / 100) : 0;
      }
    }
    return null;
  }

}
