import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any[], args?: string): any {
    if (args === 'asc') {
      return value.sort();
    }
    // tslint:disable-next-line:one-line
    else if (args === 'desc') {
      return value.sort().reverse();
    }
  }

}
