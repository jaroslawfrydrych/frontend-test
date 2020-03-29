import {Component, OnInit} from '@angular/core';
import {Item} from '../model/item';
import {ActivatedRoute} from '@angular/router';
import {ItemDetailsResolveData} from './models/item-details-resolve-data';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  public itemDetails: Item;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const snapshotData: ItemDetailsResolveData = this.activatedRoute.snapshot.data as ItemDetailsResolveData;
    this.itemDetails = snapshotData.item;
  }
}
