import {Component, ContentChildren, QueryList} from '@angular/core';
import {SidebarMenuItemComponent} from './sidebar-menu-item/sidebar-menu-item.component';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {

  @ContentChildren(SidebarMenuItemComponent) public menuItems: QueryList<SidebarMenuItemComponent>;
}
