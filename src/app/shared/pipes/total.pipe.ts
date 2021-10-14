import { Pipe, PipeTransform } from '@angular/core';
import {Client} from '../models/client';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Client, ...args: string[]): number | null {
    if (value) {
      if (args && args[0] === 'cattc') {
        return value.ca ? value.ca  * (1 + 20 / 100) : 0;
      }
    }
    return null;
  }

}
