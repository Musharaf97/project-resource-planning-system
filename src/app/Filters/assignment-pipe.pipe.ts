import { Pipe, PipeTransform } from '@angular/core';
import { Resource } from '../Resource/Resource';

@Pipe({
  name: 'assignmentPipe'
})
export class AssignmentPipePipe implements PipeTransform {

  resource: Resource;
  transform(value: any, sName: string): any {
    var upperLetter = sName.toUpperCase();

    if (sName === '') {
      return value;
    }
    const resourcesArray: any[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < value.length; i++) {
      const resourceVisa: string = value[i].resource.visa;
      if (resourceVisa.startsWith((upperLetter))) {
        resourcesArray.push(value[i]);
      }
    }
    return resourcesArray;
  }

}
