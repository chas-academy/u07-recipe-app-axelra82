import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tags'
})
export class TagsPipe implements PipeTransform {

  transform(str: string): object {
    // Make sure string is not empty
    if(str){
      // Make string lower case
      str = str.toLowerCase();

      // Split tags in to array using comma (,)
      let tagsArray = str.split(',');

      // Add # (hashtag) to each array value using map to return an array
      tagsArray = tagsArray.map(tag => tag = `#${tag}`);
      
      // Return array to use in for loop
      return tagsArray;
    }

    return;
  }

}
