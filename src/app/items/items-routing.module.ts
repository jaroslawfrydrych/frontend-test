import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemListResolver} from './item-list/item-list.resolver';
import {ItemDetailsResolver} from './item-details/item-details.resolver';


const routes: Routes = [
  {
    path: '',
    component: ItemListComponent,
    resolve: {
      items: ItemListResolver
    }
  },
  {
    path: ':id',
    component: ItemDetailsComponent,
    resolve: {
      item: ItemDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
}
