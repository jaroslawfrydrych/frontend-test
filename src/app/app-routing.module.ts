import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(module => module.ItemsModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'items'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
