import { Directive, Input, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

import { ColorType, Color } from '../../enums';


@Directive({
  selector: '[fsSelectButton]'
})
export class FsSelectButtonDirective implements OnInit {

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

    this._textColorUpdate();
  }

  @Input('width')
  set setWidth(width) {
    this.width = width;
  };

  @HostBinding('style.max-width')
  public width  = '';

  private _color: Color | string = Color.Basic;
  private _colorType: ColorType = null;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) { }

  public ngOnInit() {
    this.renderer.addClass(this.hostElement.nativeElement, 'mat-raised-button');
    this.renderer.addClass(this.hostElement.nativeElement, 'fs-select-button');
    this._textColorUpdate();
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
