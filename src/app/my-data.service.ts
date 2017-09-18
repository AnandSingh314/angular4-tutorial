import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  constructor(private http: Http) { }

  obj = {
    id: 1,
    name: 'anand',
    address: 'bangalore'
  };

  success = function () {
    return 'MyDataService says successful.';
  };

  fetchData = function() {
    this.http.get('../data/httpServiceMockData.json').subscribe(
      (data) => console.log(data.json())
    );
  };

}
