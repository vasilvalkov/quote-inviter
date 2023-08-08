import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';

import { ButtonSize } from './button-size';
import { ButtonColor } from './button-color';

/**
 * List of classes to add to AppButton instances based on host attributes to
 * style as different variants.
 */
const BUTTON_HOST_ATTRIBUTES = [
  'app-button',
  'app-icon-button'
];

/** List of classes to add to buttons instances based on host attribute selector. */
const HOST_SELECTOR_APP_CLASS_PAIR: { selector: string, appClasses: string[] }[] = [
  {
    selector: 'app-button',
    appClasses: ['app-button'],
  },
  {
    selector: 'app-icon-button',
    appClasses: ['app-button', 'app-icon-button'],
  }
];

@Component({
  selector: `button[app-button], button[app-icon-button]`,
  exportAs: 'appButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  private _size: ButtonSize = 'medium';
  private _color: ButtonColor = 'default';

  constructor(private host: ElementRef<HTMLButtonElement>) {
    const classList = this.host.nativeElement.classList;

    // For each of the variant selectors that is present in the button's host
    // attributes, add the correct corresponding class.
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        classList.add(attr);
      }
    }

    // For each of the variant selectors that is present in the button's host
    // attributes, add the correct corresponding app classes.
    for (const pair of HOST_SELECTOR_APP_CLASS_PAIR) {
      if (this._hasHostAttributes(pair.selector)) {
        pair.appClasses.forEach((className: string) => {
          classList.add(className);
        });
      }
    }
  }

  /**
   * Add a class for disabled button styling instead of the using attribute
   * selector or pseudo-selector. This allows users to create focusable
   * disabled buttons without recreating the styles.
   */
  @HostBinding('class.app-button-disabled')
  get disabledClass(): boolean {
    return this.host.nativeElement.disabled;
  }

  @Input()
  get size(): ButtonSize {
    return this._size;
  }
  set size(value: ButtonSize) {
    if (value === this._size) {
      return;
    }

    const { classList } = this.host.nativeElement;

    if (classList.contains(`app-button-${this._size}`)) {
      classList.remove(`app-button-${this._size}`);
    }

    classList.add(`app-button-${value}`);
    this._size = value;
  }

  @Input()
  get color(): ButtonColor {
    return this._color;
  }
  set color(value: ButtonColor) {
    if (value === this._color) {
      return;
    }

    const { classList } = this.host.nativeElement;

    if (classList.contains(`app-${this._size}-button`)) {
      classList.remove(`app-${this._size}-button`);
    }

    classList.add(`app-${value}-button`);
    this._color = value;
  }

  ngOnInit(): void {
    this.host.nativeElement.classList.add(`app-button-${this._size}`);
    this.host.nativeElement.classList.add(`app-${this._color}-button`);
  }

  /** Gets whether the button has one of the given attributes. */
  private _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this.host.nativeElement.hasAttribute(attribute));
  }

}
