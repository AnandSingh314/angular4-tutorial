import { MyDataService } from './my-data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  constructor(private newService: MyDataService) {
  }

  messageFromServiceInApp = this.newService.obj;

}
