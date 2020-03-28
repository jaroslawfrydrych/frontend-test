import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ItemsRoutingModule} from './items-routing.module';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {ItemListSearchComponent} from './item-list/item-list-search/item-list-search.component';
import {ItemListItemComponent} from './item-list/item-list-item/item-list-item.component';
import {ItemListResolver} from './item-list/item-list.resolver';
import {ItemDetailsResolver} from './item-details/item-details.resolver';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ItemListComponent,
    ItemDetailsComponent,
    ItemListSearchComponent,
    ItemListItemComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ItemListResolver,
    ItemDetailsResolver
  ]
})
export class ItemsModule {
}
