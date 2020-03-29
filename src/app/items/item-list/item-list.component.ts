import {Component, OnInit} from '@angular/core';
import {ItemsService} from '../items.service';
import {Observable} from 'rxjs';
import {ItemGroup} from '../model/item-group';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  public itemsList: Observable<ItemGroup[]>;

  constructor(private itemService: ItemsService) { }

  public ngOnInit(): void {
    this.onSearchTextChange();
  }

  public onSearchTextChange(text?: string) {
    this.itemsList = this.itemService.getItemsList(text);
  }
}
