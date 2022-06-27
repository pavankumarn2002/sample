import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {

  @Input('appHoverColor') appHoverColor: any;   
  constructor(private elRef: ElementRef) {  
  }  
  @HostListener('mouseover') onMouseOver() {  
    this.changeBackgroundColor(this.appHoverColor || this.appHoverColor);  
  }  
  @HostListener('mouseleave') onMouseLeave() {  
    this.changeBackgroundColor('white');  
  }  
  private changeBackgroundColor(color: any) {  
    this.elRef.nativeElement.style.color = color;  
  } 

}
