import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  constructor(private el: ElementRef) {
    console.log(this.el);
  }
  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  @Output() closeModal = new EventEmitter();

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
}
