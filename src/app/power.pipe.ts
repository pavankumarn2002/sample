import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
  transform(value: any, args?: any[]): any {
    if (value != undefined) {
      return Object.keys(value).map(key => {
        return value[key]
      });
    }

  }
}
