import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoDataService: TodoDataService
  ) {
  }

  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  onAddTodo(todo) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          var tempToDo = newTodo;
          tempToDo.id = newTodo._id;
          newTodo.id = tempToDo.id;
          console.log(JSON.stringify(tempToDo));
          console.log(JSON.stringify(newTodo));
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  onToggleTodoComplete(todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
        (updatedTodo) => {
          var tempToDo = updatedTodo;
          tempToDo.id = updatedTodo._id;
          updatedTodo.id = tempToDo.id;
          console.log(JSON.stringify(tempToDo));
          console.log(JSON.stringify(updatedTodo));

          todo = updatedTodo;
        }
      );
  }

  onTitleChange(todo) {
    this.todoDataService
      .updateTodo(todo)
      .subscribe(
        (updatedTodo) => {
          var tempToDo = updatedTodo;
          tempToDo.id = updatedTodo._id;
          updatedTodo.id = tempToDo.id;
          console.log(JSON.stringify(tempToDo));
          console.log(JSON.stringify(updatedTodo));

          todo = updatedTodo;
        }
      );
  }


  onRemoveTodo(todo) {
    this.todoDataService
      .deleteTodoById(todo._id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t._id !== todo._id);
        }
      );
  }
}
