import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './tasks/task';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Task[], args: string): any {
    return value.filter((res)=>res.Title.startsWith(args));
  }

}
