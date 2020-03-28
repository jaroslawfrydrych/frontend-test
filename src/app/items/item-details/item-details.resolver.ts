import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {Item} from '../model/item';

export class ItemDetailsResolver implements Resolve<Item> {

  resolve(): Observable<Item> {
    return of(null);
  }
}
