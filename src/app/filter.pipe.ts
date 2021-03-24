import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], property: string, filter: string): any[] {
    if (!filter) {
      return list;
    }

    const lowerCaseFilter = filter.toLowerCase();
    return list.filter(value =>
      value[property].toLowerCase().includes(lowerCaseFilter)
    );
  }
}
