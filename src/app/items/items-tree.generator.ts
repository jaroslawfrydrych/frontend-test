import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from './model/item';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {EnvironmentService} from '../services/environment.service';
import {ItemsStorageService} from './items-storage.service';
import {ItemGroup} from './model/item-group';
import {ItemTreeGroup} from './item-tree-group';

@Injectable({
  providedIn: 'root'
})
export class ItemsTreeGenerator {

  constructor() {
  }

  /**
   * Get items from storage, filter them and then make groups.
   * @param searchText for filtering items
   */
  /*public getItemsList(searchText?: string): Observable<ItemGroup[]> {
    return
  }*/

  public generate(inputArray: ItemGroup[], searchText?: string, parentId: number = null): ItemGroup[] {
    return inputArray.reduce((result: ItemTreeGroup[], currentItem: ItemGroup) => {

      // currentItem.blurred = !this.isSearchTextInTitle(currentItem, searchText);

      if (currentItem.parent_id === parentId) {
        const children = this.generate(inputArray, searchText, currentItem.id);

        if (children.length) {
          currentItem.children = children;
        }

        result.push(new ItemTreeGroup(currentItem.id, currentItem.title, currentItem.parent_id));
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
}
