import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HeaderLogoComponent} from './header/header-logo/header-logo.component';
import {HeaderUserInfoComponent} from './header/header-user-info/header-user-info.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SidebarBannerComponent} from './sidebar/sidebar-banner/sidebar-banner.component';
import {SidebarMenuComponent} from './sidebar/sidebar-menu/sidebar-menu.component';
import {SidebarMenuItemComponent} from './sidebar/sidebar-menu/sidebar-menu-item/sidebar-menu-item.component';
import {ContentComponent} from './content/content.component';
import {SharedModule} from '../shared/shared.module';

const COMPONENTS: Array<Type<any> | any[]> = [
  HeaderComponent,
  HeaderLogoComponent,
  HeaderUserInfoComponent,
  SidebarComponent,
  SidebarBannerComponent,
  SidebarMenuComponent,
  SidebarMenuItemComponent,
  ContentComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule {
}
