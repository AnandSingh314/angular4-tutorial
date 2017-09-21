import { Http } from '@angular/http';
import { MyDataService } from './../my-data.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-my-http-service',
  templateUrl: './my-http-service.component.html',
  styleUrls: ['./my-http-service.component.css']
})
export class MyHttpServiceComponent implements OnInit {

  people: any;

  constructor(private http: Http, private newService: MyDataService) {
  }

  ngOnInit() {
    // this.newService.fetchData();
    this.http
      .get('../data/httpServiceMockData.json')
      .map(response => response.json())
      .subscribe(this.next, this.error, this.complete);
    // this.http.get('../data/httpServiceMockData.json').subscribe((data)=>{console.log(data.json())});
  }

  next = function (response) {
    this.people = response.data;
    console.log(this.people);
  };

  error(data) {
    console.error('Error failback is called');
    console.error(data);
  }

  complete() {
    console.log('http service call has been completed');
  }

  onClickBtn() {
    console.log('this is the new serivice');
    this.http
      .get('../data/httpServiceMockData.json')
      .map(response => response.json())
      .subscribe(this.next, this.error, this.complete);
  }
}
