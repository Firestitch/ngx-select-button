import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import { MatSelect } from '@angular/material/select';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Color, ColorType } from '../../enums';


@Directive({
  selector: '[fsSelectButton]',
})
export class FsSelectButtonDirective implements OnInit, OnChanges, OnDestroy {

  @Input()
  public set color(value: Color | string) {
    if (!value) {
      return;
    }

    this._clearColor();

    this._color = value;

    if (value.match(/^#/)) {
      this._renderer.setStyle(this._hostElement.nativeElement, 'background-color', value);
      this._colorType = ColorType.Style;
    } else {
      this._renderer.addClass(this._hostElement.nativeElement, `mat-${  value}`);
      this._colorType = ColorType.Klass;
    }
  }

  @Input('width')
  public set setWidth(width) {
    this.width = width;
  }

  @Input() public buttonType: 'raised' | 'basic' | 'flat' | 'stroked' = 'raised';
  @Input() public deselectOnChange = true;

  @HostBinding('style.max-width')
  public width  = '';

  private _color: Color | string = Color.Basic;
  private _colorType: ColorType = null;
  private _destroy$ = new Subject();
  
  constructor(
    private _renderer: Renderer2, 
    private _hostElement: ElementRef,
    private _select: MatSelect,
  ) { }
  
  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  public ngOnInit() {
    const buttonType = this.buttonType === 'basic' ? 'mat-button' : `mat-${this.buttonType}-button`;
    this._renderer.addClass(this._hostElement.nativeElement, buttonType);
    this._renderer.addClass(this._hostElement.nativeElement, 'fs-select-button');
    this._textColorUpdate();

    if(this.deselectOnChange) {
      this._select.selectionChange
        .pipe(
          takeUntil(this._destroy$),
        )
        .subscribe(() => {
          this._select.writeValue(null);
        });
    }
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.color && changes.color.currentValue !== changes.color.previousValue) {
      this._textColorUpdate();
    }
  }

  private _clearColor() {
    if (this._colorType === ColorType.Klass) {
      this._renderer.removeClass(this._hostElement.nativeElement, `mat-${  this._color}`);
    } else if (this._colorType === ColorType.Style) {
      this._renderer.removeStyle(this._hostElement.nativeElement, 'background-color');
    }

    this._color = null;
    this._colorType = null;
  }

  private _textColorUpdate() {
    const value = this._hostElement.nativeElement
      .querySelector('.mat-select-trigger .mat-select-value');
    const arrow = this._hostElement.nativeElement
      .querySelector('.mat-select-arrow-wrapper .mat-select-arrow');

    let textColor = null;
    switch (this._color) {
      case Color.Basic:
        textColor = 'initial';
        break;
      default:
        textColor = '#fff';
    }

    this._renderer.setStyle(value, 'color', textColor);
    this._renderer.setStyle(arrow, 'color', textColor);
  }
}
