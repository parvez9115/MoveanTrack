import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], terms: string): any[] {
    if (!items) return [];
    if (!terms) return items;
    terms = terms.toLowerCase();
    return items.filter(it => {
      if (it.plateNo != null)
        return it.plateNo.replace(/ /g,'').toLowerCase().includes(terms.replace(/ /g,''));
      else
        return false;
    });
  }

}
