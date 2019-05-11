import { Directive, Input, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

const enum ColorType {
  Klass = 'klass',
  Style = 'style',
}

@Directive({
  selector: '[fsSelectButton]'
})
export class FsSelectButtonDirective implements OnInit {

  @Input()
  set color(value) {
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

  @HostBinding('style.max-width')
  public width  = '';

  private _color: string;
  private _colorType: ColorType;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  public ngOnInit() {
    this.renderer.addClass(this.hostElement.nativeElement, 'mat-raised-button');
    this.renderer.addClass(this.hostElement.nativeElement, 'fs-select-button');
  }

  private _clearColor() {
    if (this._colorType === ColorType.Klass) {
      this.renderer.removeClass(this.hostElement.nativeElement, 'mat-' + this._color);
    } else if (this._colorType === ColorType.Style) {
      this.renderer.removeStyle(this.hostElement.nativeElement, 'background-color');
    }

    this._color = void 0;
    this._colorType = void 0;
  }
}
