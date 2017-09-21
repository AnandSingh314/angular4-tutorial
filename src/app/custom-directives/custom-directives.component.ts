import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {

  // @ViewChild('parentPane') private parentPannel;

  private childSays: String;

  constructor() {
   }

  ngOnInit() {
  }

  listenChild($event) {
    this.childSays = $event;
    console.log('Parent(showing what child said): ', $event);
  }

}
