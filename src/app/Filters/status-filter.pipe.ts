import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {
  // tslint:disable-next-line: ban-types
  transform(value: any, sName: string): any {
    if (sName === ''){
      return value;
    }
    const projectsArray: any[] = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < value.length; i++) {
      const projectStatus: string = value[i].status;
      if (projectStatus.startsWith(sName)){
        projectsArray.push(value[i]);
      }
    }
    return projectsArray;
  }
}
