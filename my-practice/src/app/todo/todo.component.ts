import { Component } from '@angular/core';
import { Task } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  tasks: Task[] = [
    new Task(1, new Date(), 'Task 1', false),
    new Task(2, new Date(), 'Task 2', false),
    new Task(3, new Date(), 'Task 3', false)
  ];

  newTaskTitle: string = '';

  constructor() {
  }

  addTask(): void {
    const newTask = new Task(this.tasks.length, new Date(), this.newTaskTitle, false);
    this.tasks.push(newTask);
    this.newTaskTitle = '';
  }

  deleteTask(i: number): void {
    this.tasks.splice(i, 1);
    console.log(i);
  }
}
