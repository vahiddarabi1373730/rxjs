import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../_models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todoSubject$ = new BehaviorSubject<TodoInterface[]>([]);
  public todo$ = this.todoSubject$.asObservable();

  addTodo(todo: TodoInterface) {
    const newTodos = [...this.todoSubject$.getValue(), todo];
    this.todoSubject$.next(newTodos);
  }

  deleteTodo(id: number) {
    const todos: TodoInterface[] = this.todoSubject$.getValue();
    const newtodos = todos.filter((todo) => todo.id !== id);
    this.todoSubject$.next(newtodos);
  }

  editTodo(todo: TodoInterface, id: any) {
    // const updatedTodo: TodoInterface = {
    //   id: todo.id,
    //   name: todo.name,
    //   time: todo.time,
    //   worker: todo.worker,
    // };
    // const new_todos = this.todoSubject$
    //   .getValue()
    //   .filter((todo) => todo.id !== id);
    // const finalTodos = [...new_todos, updatedTodo];
    // this.todoSubject$.next(finalTodos);

    // this.todoSubject$.next(
    //   this.todoSubject$.getValue().map((item) => (item.id == id ? todo : item))
    // );

    this.todoSubject$.next(
      this.todoSubject$
        .getValue()
        .map((t) => (t.id === id ? { ...t, ...todo } : t))
    );
  }
}
