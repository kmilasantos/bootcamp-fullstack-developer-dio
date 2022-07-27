import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor() { }

  ngOnInit(): void {
    //this.addTodo
    let todos =  JSON.parse(localStorage.getItem('todos')!);
    if(!todos) {
      this.todos = [];
    } else{
      this.todos = todos;
    }
  }

  addTodo(title: string){
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));

    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  removeTodo(todo: any) {
    console.log("O elemento pai recebeu", todo)
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  
}
