import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnInit {
  showModal = false;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.showModal = !this.showModal;
  }
}
