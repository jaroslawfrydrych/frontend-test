import {Observable} from 'rxjs';
import {Item} from '../../model/item';

export interface ItemDetailsResolveData {
  item: Observable<Item>
}
