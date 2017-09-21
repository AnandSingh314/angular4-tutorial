import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private componentName = 'Categories Component';

  @ViewChild('myTemplVar')
  private templateVariable;

  private canPrint = false;

  constructor() {
  }

  ngOnInit() {

    setInterval(() => this.send2Server(), 2000);

  }

  send2Server() {
    let data = this.templateVariable.nativeElement;
    if (this.canPrint) {
      console.log(data.value);
    }
  }
}
