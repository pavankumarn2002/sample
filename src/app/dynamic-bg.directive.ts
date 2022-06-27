import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDynamicBg]'
})
export class DynamicBgDirective {

  @Input('appDynamicBg') appDynamicBg: any;
  constructor(private elRef: ElementRef) {
  }
  @HostListener('window:load', ['$event']) onPageLoad(event: Event) {
    this.changeBackgroundColor(this.appDynamicBg || this.appDynamicBg);
  }
  private changeBackgroundColor(color: any) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }

}
