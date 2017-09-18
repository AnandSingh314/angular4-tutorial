import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  isTrue = true;
  isFlase = false;

  obj = {
    name: 'anand',
    address: 'bangalore',
    country: 'INDIA',
    currency: 'INR'
  };

  arr = [
    {
      name: 'Anand',
      address: 'bangalore',
      country: 'INDIA',
      currency: 'INR'
    },
    {
      name: 'Vijay',
      address: 'kanpur',
      country: 'INDIA',
      currency: 'INR'
    },
    {
      name: 'Singh',
      address: 'punjab',
      country: 'INDIA',
      currency: 'INR'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
