import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './model/item';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../services/environment.service';
import {ItemsStorageService} from './items-storage.service';
import {ItemGroup} from './model/item-group';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private environmentService: EnvironmentService,
              private httpClient: HttpClient,
              private itemsStorageService: ItemsStorageService) {
  }

  /**
   * Get items from API and then sets them into storage.
   */
  public getItemsListFromApi(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.environmentService.apiBasePath + '/items')
      .pipe(
        tap((items: Item[]) => this.itemsStorageService.setItems(items))
      );
  }

  /**
   * Get items from storage, filter them and then make groups.
   * @param searchText for filtering items
   */
  public getItemsList(searchText?: string): Observable<ItemGroup[]> {
    return this.itemsStorageService.itemStorage$
      .pipe(
        map((items: Item[]) => this.groupAndFilterItems(items, searchText)),
        map((items: ItemGroup[]) => this.filterBlurredItems(items))
      );
  }

  public getItemDetails(itemId: number): Observable<Item> {
    return this.httpClient.get<Item>(this.environmentService.apiBasePath + '/items/' + itemId);
  }

  private groupAndFilterItems(inputArray: ItemGroup[], searchText?: string, parentId: number = null): ItemGroup[] {
    return inputArray.reduce((result: ItemGroup[], currentItem: ItemGroup) => {

      currentItem.blurred = !this.isSearchTextInTitle(currentItem, searchText);

      if (currentItem.parent_id === parentId) {
        const children = this.groupAndFilterItems(inputArray, searchText, currentItem.id);
        if (children.length) {
          currentItem.children = children;
        }
        result.push(currentItem);
      }
      return result;
    }, []);
  }

  private isSearchTextInTitle(item: ItemGroup, searchText?: string): boolean {
    if (!searchText) {
      return true;
    }

    const parsedTitle = item.title.toLocaleLowerCase();
    const parsedSearchText = searchText.toLocaleLowerCase();

    return parsedTitle.includes(parsedSearchText);
  }

  private filterBlurredItems(items: ItemGroup[]): ItemGroup[] {
    return items.filter((item: ItemGroup) => {
      if (!item.children) {
        if (!item.blurred) {
          return item;
        }
      } else if (!this.checkIsChildrenBlurred(item)) {
        return item;
      }
    });
  }

  private checkIsChildrenBlurred(item: ItemGroup): boolean {
    const flatGroup: ItemGroup[] = [item, ...this.flattenChildren(item.children)];
    const filteredGroup: ItemGroup[] = flatGroup.filter((flatItem: ItemGroup) => !flatItem.blurred);
    return !filteredGroup.length;
  }

  private flattenChildren(children: ItemGroup[]): ItemGroup[] {
    return children.reduce((result: ItemGroup[], current: ItemGroup) => {
      result.push(current);

      if (current.children) {
        result = [...result, ...this.flattenChildren(current.children)];
      }

      return result;
    }, []);
  }
}
