import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberHexadecimal',
  standalone: true
})
export class NumberHexadecimalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
