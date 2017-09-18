import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.css']
})
export class MyPipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  name = 'Anand Vijay Singh';
  // tslint:disable-next-line:member-ordering
  dob: any = Date.now();

  // cutome pipe
  // create new pipe with ng g pipe custom-pipe
  // tslint:disable-next-line:member-ordering
  arr = [ 50, 30, 70, 10, 40, 60, 20, 80, 90 ];



}
