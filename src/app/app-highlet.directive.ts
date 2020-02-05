import { Directive, ElementRef, Input, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlet]'
})
export class AppHighletDirective {

  constructor(private el: ElementRef) {
   }

  //  @Input() defaultColor: string ;

  //  @Input('appHighlet') hlColor: string;

  //  @HostListener('mouseenter') onmouseenter(){
  //   this.highColor(this.hlColor || this.defaultColor || 'red')
  //  }
  //  @HostListener('mouseleave') onmouseleave(){
  //   this.highColor(null);
  //  }

  //  private highColor(color: string) {
  //    this.elem.nativeElement.style.backgroung= color ;
  //  }


  //  @Input() defaultColor: string;
 
  // @Input('appHighlight') highlightColor: string;
 
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.highlightColor || this.defaultColor || 'red');
  // }
 
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // }
 
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  //}
}