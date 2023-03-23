import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor() {}
  showModal = false;

  email = {
    id: 0,
    subject: '',
    from: 'db.vahid1373@gmail.com',
    tod: '',
    text: '',
  };

  ngOnInit(): void {}

  toggle() {
    this.showModal = !this.showModal;
  }

  reloadEmails() {}
}
