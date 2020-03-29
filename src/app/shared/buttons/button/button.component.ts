import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  /**
   * Typing for colors are hardcoded here in purpose. I decided not to use enum here because of better IDE autocomplete handling for this
   * parameter. When types are hardcoded then it will work in HTML files like native parameter, with suggested values.
   */
  @Input() public color: 'primary' | 'transparent' = 'primary';
  @Input() public noPadding = false;
  @Output() public buttonClick: EventEmitter<null> = new EventEmitter<null>();

  public handleClick(event?: MouseEvent | any): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.buttonClick.emit(null);
  }
}
