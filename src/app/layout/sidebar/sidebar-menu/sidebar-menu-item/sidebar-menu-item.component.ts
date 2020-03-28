import {ChangeDetectionStrategy, Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarMenuItemComponent {

  @ViewChild('content', {static: true}) public content: TemplateRef<SidebarMenuItemComponent>;
}
