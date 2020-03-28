import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsModule} from './buttons/buttons.module';
import {FormsModule} from './forms/forms.module';

const MODULES: Array<Type<any> | any[]> = [
  ButtonsModule,
  FormsModule,
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
