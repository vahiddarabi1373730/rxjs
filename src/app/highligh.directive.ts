import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs';

@Directive({
  selector: '[test]',
})
export class HighLight implements OnInit {
  constructor(private el: ElementRef, private controlName: NgControl) {}
  ngOnInit(): void {
    this.controlName.control.parent.valueChanges
      .pipe(
        map(({ a, b, total }) => {
          return Math.abs(a + b - total) / (a + b);
        })
      )
      .subscribe((res) => {
        if (res < 0.2) {
          this.el.nativeElement.style.color = 'green';
        } else {
          this.el.nativeElement.style.color = 'red';
        }
      });
  }
}

// [ngClass]="highlight(a, b, total.value) ? 'green' : 'red'"
