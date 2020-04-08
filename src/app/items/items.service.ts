import {Injectable} from '@angular/core';
import {EnvironmentService} from '../services/environment.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from './model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private environmentService: EnvironmentService,
              private httpClient: HttpClient) {
  }

  /**
   * Get items from API and then sets them into storage.
   */
  public getItemsListFromApi(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.environmentService.apiBasePath + '/items')
      .pipe(
        // tap((items: Item[]) => this.itemsStorageService.setItems(items))
      );
  }

  public getItemDetails(itemId: number): Observable<Item> {
    return this.httpClient.get<Item>(this.environmentService.apiBasePath + '/items/' + itemId);
  }
}
