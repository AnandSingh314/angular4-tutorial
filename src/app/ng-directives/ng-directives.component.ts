import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.css']
})
export class NgDirectivesComponent implements OnInit {

  private size = 150;
  private colour = 'blue';
  constructor() {
  }

  ngOnInit() {
  }

}
