import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-type-alias-demo',
  templateUrl: './type-alias-demo.component.html',
  styleUrls: ['./type-alias-demo.component.css']
})
export class TypeAliasDemoComponent implements OnInit, OnChanges {

  @Input() parentMessage: string;
  @Output() onChildEcho = new EventEmitter();

  private childMessage: string;

  constructor() {
    console.log('Child(showing what parent said): ', this.parentMessage);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child(showing what parent said via onchange method): ', changes['parentMessage'].currentValue);
  }

  fire() {
    this.onChildEcho.emit(this.childMessage);
  }

}
