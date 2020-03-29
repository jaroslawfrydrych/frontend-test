import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {FormsModule as AngularFormsModule, ReactiveFormsModule} from '@angular/forms';

const COMPONENTS: Array<Type<any> | any[]> = [
  InputComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    AngularFormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class FormsModule {
}
