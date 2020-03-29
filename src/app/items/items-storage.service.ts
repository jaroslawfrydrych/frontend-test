import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Item} from './model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsStorageService {

  public itemStorage$: Observable<Item[]>;
  private itemStorageSubject: BehaviorSubject<Item[]>;

  constructor() {
    this.itemStorageSubject = new BehaviorSubject<Item[]>([]);
    this.itemStorage$ = this.itemStorageSubject.asObservable();
  }

  get itemStorage(): Item[] {
    return this.itemStorageSubject.getValue();
  }

  public setItems(items: Item[]): void {
    this.itemStorageSubject.next(items);
  }
}
