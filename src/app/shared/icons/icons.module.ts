import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from './icon/icon.component';

const COMPONENTS: Array<Type<any> | any[]> = [
  IconComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class IconsModule {
}
