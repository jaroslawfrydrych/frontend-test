import {Host, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {AbstractControl, ControlContainer, FormControl} from '@angular/forms';

/**
 * I used class that I created recently and I am using this for creating custom form components for Angular apps.
 */
export class BaseFormControl implements OnInit {

  public control: AbstractControl = new FormControl();
  @Input() public placeholder: string;
  @Input() public formControlName: string;
  protected value: any = null;

  constructor(@Optional() @Host() @SkipSelf() protected localControlContainer: ControlContainer) {
  }

  public ngOnInit(): void {
    this.init();
  }

  protected init(): void {
    if (this.localControlContainer) {
      if (this.formControlName) {
        this.control = this.localControlContainer.control.get(this.formControlName);
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn('Can\'t find parent FormGroup directive');
    }
  }

  public hasControlError(): boolean {
    return this.control.invalid && this.control.touched;
  }


  writeValue(value) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onChange: any = () => {
  };

  onTouched: any = () => {
  };
}
