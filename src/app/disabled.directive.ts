import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[disabled1]',
})
export class Disabled1 {
  @Input('disabled1') set test(value: any) {
    for (let key in value) {
      if (value[key]) {
        this.el.nativeElement.classList.add(key);
      } else {
        this.el.nativeElement.classList.remove(key);
      }
    }
  }
  constructor(private el: ElementRef) {}
}
