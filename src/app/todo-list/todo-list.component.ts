import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  items = ['Angular4', 'React', 'Underscore.js', 'paperJs'];

  // tslint:disable-next-line:member-ordering
  newItem = '';

  pushItem = function () {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  };

  removeItem = function (index: number) {
    this.items.splice(index, 1);
  };

}
