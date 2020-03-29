import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Item} from '../../model/item';
import {Router} from '@angular/router';
import {ItemGroup} from '../../model/item-group';

@Component({
  selector: 'app-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.scss'],
})
export class ItemListItemComponent {

  @Input() public item: ItemGroup;

  constructor(private router: Router) {
  }

  public navigateToItem(itemId: number) {
    this.router.navigate(['items', itemId]);
  }
}
