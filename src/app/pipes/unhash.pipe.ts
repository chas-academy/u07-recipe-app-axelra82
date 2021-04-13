import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unhash'
})
export class UnhashPipe implements PipeTransform {

  transform(str: string): string {
      // Return tag without # (hashsign) for clean route param
      return str.replace(/^#/gm, '');
  }

}
