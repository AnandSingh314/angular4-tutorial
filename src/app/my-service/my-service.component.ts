import { MyDataService } from './../my-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css']
})
export class MyServiceComponent implements OnInit {

  messageFromService: object;

  constructor(private newService: MyDataService) {
    this.messageFromService = this.newService.obj;
  }

  ngOnInit() {
    console.log(this.newService.success());
    console.log(this.newService.obj);
  }

  // messageFromService var and newService.obj is same, any change to local ref var will modify the service value as well.
  onMessageChange = function (value){
    this.messageFromService.name = value;
    // this.newService.obj.name = value;
  };

  increment = function (){
    this.messageFromService.id += 1;
  };

  decrement = function (){
    this.messageFromService.id -= 1;
  };

}
