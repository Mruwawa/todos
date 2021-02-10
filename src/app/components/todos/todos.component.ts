import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo:string = "";
  inputDesc:string = "";

  constructor() { }

  ngOnInit(): void {
    let loaded:Todo[] = JSON.parse(localStorage.getItem("todoList"));
    this.todos = loaded || [];
  }

  toggleDone(id:number): void {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      localStorage.setItem("todoList", JSON.stringify(this.todos));
      return v;
    })
  }

  deleteTodo(id:number): void {
    this.todos = this.todos.filter((v, i) => i !== id);
    localStorage.setItem("todoList", JSON.stringify(this.todos));
  }

  addTodo(){
    if(this.inputTodo != "")
    this.todos.push({
      content:this.inputTodo,
      completed:false,
    });
    this.inputTodo = "";
    localStorage.setItem("todoList", JSON.stringify(this.todos));
  }
}
