import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  private componentName = 'Catalog Component';
  private data1 = 'property binding [property]="variable name"' ;
  private data2 = 'interpolation binding property="{{variable name}}"' ;

  private data3 = '[(ngModel)]="variable_name"' ;
  private data4 = '(input)="changeValue($event)"' ;

  constructor() { }

  ngOnInit() {
  }

  changeData4($event) {
    this.data4 = $event.target.value;
  }

}
