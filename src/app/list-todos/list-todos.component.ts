import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../_services/todo.service';
import { TodoInterface } from '../_models/todo.interface';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  constructor(public todoservice: TodoService) {}

  @Output() emitEditTodo = new EventEmitter<any>();
  edittodo: any;
  ngOnInit(): void {}

  onAddTodo(formGroup: any) {
    this.todoservice.addTodo(formGroup.value);
  }

  onDeleteTodo(id: number) {
    this.todoservice.deleteTodo(id);
  }

  onEditTodo(todo: any) {
    this.edittodo = todo;
  }
  onEditTodoService(event: any) {
    console.log(event);

    this.todoservice.editTodo(event.value, event.value.id);
  }
}
