import { TodoInterface } from './../_models/todo.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent implements OnInit {
  constructor() {}

  @Output() emitEditTodo = new EventEmitter();
  @Input() set editTodo(todo: TodoInterface) {
    this.form.patchValue({
      name: todo?.name,
      time: todo?.time,
      worker: todo?.worker,
      id: todo?.id,
    });
  }
  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    time: new FormControl(),
    worker: new FormControl(),
    id: new FormControl(),
  });
  ngOnInit(): void {}

  onSubmitForm() {
    this.emitEditTodo.emit(this.form);
  }
}
