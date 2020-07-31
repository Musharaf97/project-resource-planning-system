import { Pipe, PipeTransform } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Pipe({
  name: 'resourceFilter'
})
export class ResourceFilterPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    var upperLetter = sName.toUpperCase();

    if (sName === '') {
      return value;
    }
    const resourcesArray: any[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < value.length; i++) {
      const resourceVisa: string = value[i].visa;
      if (resourceVisa.startsWith((upperLetter))) {
        resourcesArray.push(value[i]);
      }
    }
    return resourcesArray;
  }

}
