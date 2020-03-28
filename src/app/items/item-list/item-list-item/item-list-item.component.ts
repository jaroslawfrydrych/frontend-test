import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Item} from '../../model/item';

@Component({
  selector: 'app-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListItemComponent {

  @Input() public item: Item;
}
