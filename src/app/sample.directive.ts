import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dir-content]'
})
export class SampleDirective {

  constructor(elem: ElementRef) { 
  //er.nativeElement.innerText ="";
  //console.error(elem);
  elem.nativeElement.innerHTML="<h2> hi, Testing Custom Directives</h2>";
}

}