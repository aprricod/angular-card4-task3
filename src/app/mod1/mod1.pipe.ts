import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mod1',
})
export class Mod1Pipe implements PipeTransform {
  transform(values: string, ...args: unknown[]): unknown {
    return values.toString().replace(',', '; ');
  }
}
