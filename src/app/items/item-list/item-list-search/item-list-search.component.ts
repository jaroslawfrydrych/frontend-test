import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-item-list-search',
  templateUrl: './item-list-search.component.html',
  styleUrls: ['./item-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListSearchComponent {
}
