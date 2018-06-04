import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {
  transform(items: any[],  searchString: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchString) {
      return items;
    }

    return items.filter(singleItem => singleItem.nombre.toLowerCase().includes(searchString.toLowerCase()));
  }
}
