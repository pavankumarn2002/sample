import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
  }

}
