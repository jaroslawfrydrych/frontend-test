import {Component, OnInit} from '@angular/core';
import {ItemsTreeGenerator} from '../items-tree.generator';
import {Observable} from 'rxjs';
import {ItemGroup} from '../model/item-group';
import {map} from 'rxjs/operators';
import {Item} from '../model/item';
import {ItemsStorageService} from '../items-storage.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public itemsList: Observable<ItemGroup[]>;

  constructor(private itemsTreeGenerator: ItemsTreeGenerator,
              private itemsStorageService: ItemsStorageService) { }

  public ngOnInit(): void {
    this.onSearchTextChange();
  }

  public onSearchTextChange(text?: string) {
    this.itemsList = this.itemsStorageService.itemStorage$
      .pipe(
        map((items: Item[]) => this.itemsTreeGenerator.generate(items, text)),
        map((items: ItemGroup[]) => this.filterBlurredItems(items))
      );
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
