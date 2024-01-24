import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import { Color, ColorType } from '../../enums';


@Directive({
  selector: '[fsSelectButton]'
})
export class FsSelectButtonDirective implements OnInit, OnChanges {

  @Input()
  set color(value: Color | string) {
    if (!value) {
      return;
    }

    this._clearColor();

    this._color = value;

    if (value.match(/^#/)) {
      this.renderer.setStyle(this.hostElement.nativeElement, 'background-color', value);
      this._colorType = ColorType.Style;
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, 'mat-' + value);
      this._colorType = ColorType.Klass;
    }
  }

  @Input('width')
  set setWidth(width) {
    this.width = width;
  };

  @Input() public buttonType: 'raised' | 'basic' | 'flat' | 'stroked' = 'raised';

  @HostBinding('style.max-width')
  public width  = '';

  private _color: Color | string = Color.Basic;
  private _colorType: ColorType = null;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) { }

  public ngOnInit() {
    const buttonType = this.buttonType === 'basic' ? 'mat-button' : `mat-${this.buttonType}-button`;
    this.renderer.addClass(this.hostElement.nativeElement, buttonType);
    this.renderer.addClass(this.hostElement.nativeElement, 'fs-select-button');
    this._textColorUpdate();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.color && changes.color.currentValue !== changes.color.previousValue) {
      this._textColorUpdate();
    }
  }

  private _clearColor() {
    if (this._colorType === ColorType.Klass) {
      this.renderer.removeClass(this.hostElement.nativeElement, 'mat-' + this._color);
    } else if (this._colorType === ColorType.Style) {
      this.renderer.removeStyle(this.hostElement.nativeElement, 'background-color');
    }

    this._color = null;
    this._colorType = null;
  }

  private _textColorUpdate() {
    const value = this.hostElement.nativeElement.querySelector('.mat-select-trigger .mat-select-value');
    const arrow = this.hostElement.nativeElement.querySelector('.mat-select-arrow-wrapper .mat-select-arrow');

    let textColor = null;
    switch (this._color) {
      case Color.Basic:
        textColor = 'initial';
        break;
      default:
        textColor = '#fff';
    }

    this.renderer.setStyle(value, 'color', textColor);
    this.renderer.setStyle(arrow, 'color', textColor);
  }
}
