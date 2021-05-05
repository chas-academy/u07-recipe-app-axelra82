import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parse'
})
export class ParsePipe implements PipeTransform {

  transform(str: string): object {
    // Make sure string is not empty
    if(str){
      return JSON.parse(str);
    }
    return;
  }

}
