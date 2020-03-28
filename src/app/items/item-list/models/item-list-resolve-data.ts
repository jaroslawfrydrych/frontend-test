import {Observable} from 'rxjs';
import {ItemGroup} from '../../model/item-group';

export interface ItemListResolveData {
  items: Observable<ItemGroup[]>;
}
