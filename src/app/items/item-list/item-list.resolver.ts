import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ItemsService} from '../items.service';
import {Item} from '../model/item';
import {Injectable} from '@angular/core';

@Injectable()
export class ItemListResolver implements Resolve<Item[]> {

  constructor(private itemsService: ItemsService) {
  }

  public resolve(): Observable<Item[]> {
    return this.itemsService.getItemsListFromApi();
  }
}
