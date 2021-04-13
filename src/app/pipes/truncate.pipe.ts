import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(str: string, num:number): string {
     // If string is less than or equal to num don't truncate
     if (str.length <= num) {
      return str;
    }

    // Truncated string with elipses
    return str.slice(0, num) + '...';
  }

}
