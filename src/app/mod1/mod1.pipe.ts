import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mod1',
})
export class Mod1Pipe implements PipeTransform {
  transform(values: string[], ...args: unknown[]): string {
    const mapValue: string[] = values.map((value) => {
      return (value);
    });
    return mapValue.join('; ');
  }
}



// transform(values: string, ...args: unknown[]): unknown {
//   return values.toString().replace(',', '; ');
// }