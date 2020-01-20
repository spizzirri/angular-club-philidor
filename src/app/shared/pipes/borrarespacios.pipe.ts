import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'borrarespacios'
})
export class BorrarespaciosPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.replace(/ /g, "");
  }

}
