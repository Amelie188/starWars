import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initiales'
})
export class InitialesPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
  console.log(value);
    const arrayName = value.split(' ');
    return arrayName[0][0] + arrayName[1][0];
  }

}
