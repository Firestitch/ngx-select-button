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

import { Color } from '../../enums';


@Directive({
  selector: '[fsSelectButton]',
})
export class FsSelectButtonDirective implements OnInit, OnChanges, OnDestroy {

  @Input() public color: Color | string;

  @Input('minWidth')
  public minWidth: number;

  @Input('maxWidth')
  public maxWidth: number;

  @Input('width')
  public width: number;

  @HostBinding('style.min-width')
  public get styleMinWidth() {
    return this.minWidth ? `${this.minWidth}px` : null;
  }
  
  @HostBinding('style.max-width')
  public get styleMaxWidth() {
    return this.maxWidth ? `${this.maxWidth}px` : null;
  }

  @HostBinding('style.width')
  public get stylwidth() {
    return this.width ? `${this.width}px` : null;
  }

  @Input() public buttonType: 'raised' | 'basic' | 'flat' | 'stroked' = 'raised';
  @Input() public deselectOnChange = true;

  private _destroy$ = new Subject();
  
  constructor(
    private _renderer: Renderer2, 
    private _el: ElementRef,
    private _select: MatSelect,
  ) {
    this._select.panelWidth = null;
  }
  
  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public ngOnInit() {
    const buttonClasses = ['mdc-button','mat-mdc-button','mat-mdc-button-base'];

    switch (this.buttonType) {
      case 'raised': {
        buttonClasses.push('mat-mdc-raised-button');
    
        break;
      }
      case 'flat': {
        buttonClasses.push('mat-mdc-unelevated-button');
    
        break;
      }
      case 'stroked': {
        buttonClasses.push('mat-mdc-outlined-button');
    
        break;
      }
    } 

    buttonClasses
      .forEach((cls) => {
        this._renderer.addClass(this._el.nativeElement, cls);
      });

    this._renderer.addClass(this._el.nativeElement, 'fs-select-button');

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
    if (changes.color) {
      const color = changes.color.currentValue;
  
      if(color) {
        if (color.match(/^#/)) {
          this._renderer.setStyle(this._el.nativeElement, 'background-color', color);
        } else {
          this._renderer.addClass(this._el.nativeElement, `mat-${color}`);
        }     
        this._renderer.addClass(this._el.nativeElement, 'fs-select-button-dark');         
      } else {        
        this.el.classList
          .forEach((cls) => {
            if(cls.startsWith('mat-')) {
              this._renderer.removeClass(this._el.nativeElement, cls);
            }
          });
      }
    }
  }

  public get el(): HTMLElement {
    return this._el.nativeElement;
  }

}
