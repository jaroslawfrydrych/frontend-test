import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ItemGroup} from '../model/item-group';

export class ItemListResolver implements Resolve<ItemGroup[]> {

  resolve(): Observable<ItemGroup[]> {
    return of([]);
  }
}
