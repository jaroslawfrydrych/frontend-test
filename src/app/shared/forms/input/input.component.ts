import {Component, Input} from '@angular/core';
import {BaseFormControl} from '../base-form-control/base-form-control';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseFormControl {

  /**
   * Like in buttons, typing for types are hardcoded here in purpose. I decided not to use enum here because of better IDE autocomplete
   * handling for this parameter. When types are hardcoded then it will work in HTML files like native parameter, with suggested values.
   */
  @Input() public type: 'email' | 'password' | 'tel' | 'text' = 'text';
  @Input() public placeholder: string;
  @Input() public icon: string;
}
