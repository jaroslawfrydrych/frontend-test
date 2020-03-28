import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {FormComponent} from './form/form.component';
import {FormsModule as AngularFormsModule, ReactiveFormsModule} from '@angular/forms';

const COMPONENTS: Array<Type<any> | any[]> = [
  InputComponent,
  FormComponent
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
