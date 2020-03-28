import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsModule} from './buttons/buttons.module';
import {FormsModule} from './forms/forms.module';
import {IconsModule} from './icons/icons.module';

const MODULES: Array<Type<any> | any[]> = [
  ButtonsModule,
  FormsModule,
  IconsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule {
}
