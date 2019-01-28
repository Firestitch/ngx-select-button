import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[fsSelectButton]'
})
export class FsSelectButtonDirective implements OnInit{
  @Input() ngModel;
  @Input() color = 'basic';

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  public ngOnInit() {
    this.renderer.addClass(this.hostElement.nativeElement, 'mat-raised-button');
    this.renderer.addClass(this.hostElement.nativeElement, 'mat-' + this.color);
    this.renderer.addClass(this.hostElement.nativeElement, 'fs-select-button');
  }
}
