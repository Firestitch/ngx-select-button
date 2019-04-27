import { Directive, Input, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[fsSelectButton]'
})
export class FsSelectButtonDirective implements OnInit{
  @Input() ngModel;
  @Input() color = 'basic';
  @Input('width') set setWidth(width) {
    this.width = width;
  };

  @HostBinding('style.max-width') width  = '';

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  public ngOnInit() {
    this.renderer.addClass(this.hostElement.nativeElement, 'mat-raised-button');
    this.renderer.addClass(this.hostElement.nativeElement, 'fs-select-button');

    if (String(this.color).match(/^#/)) {
      this.renderer.setStyle(this.hostElement.nativeElement, 'background-color', this.color);
    } else {
      this.renderer.addClass(this.hostElement.nativeElement, 'mat-' + this.color);
    }
  }
}
