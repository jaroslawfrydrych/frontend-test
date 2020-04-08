import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ItemsTreeGenerator} from '../items-tree.generator';
import {Item} from '../model/item';
import {Injectable} from '@angular/core';

@Injectable()
export class ItemListResolver implements Resolve<Item[]> {

  constructor(private itemsService: ItemsTreeGenerator) {
  }

  public resolve(): Observable<Item[]> {
    // return this.itemsService.getItemsListFromApi();
    return of([]);
  }
}
