import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor() {}

  @Output() emitForm = new EventEmitter<any>();

  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    time: new FormControl(),
    worker: new FormControl(),
    id: new FormControl(),
  });

  onSubmitForm() {
    this.form.controls['id'].setValue(Math.random());
    this.emitForm.emit(this.form);
  }

  ngOnInit(): void {}
}
