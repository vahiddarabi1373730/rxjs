import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: 'list', component: ListTodosComponent }];
@NgModule({
  declarations: [
    AppComponent,
    ListTodosComponent,
    AddTodoComponent,
    EditTodoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
