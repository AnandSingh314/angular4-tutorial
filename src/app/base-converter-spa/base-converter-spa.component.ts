import { AppPage } from './../../../e2e/app.po';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-converter-spa',
  templateUrl: './base-converter-spa.component.html',
  styleUrls: ['./base-converter-spa.component.css']
})
export class BaseConverterSpaComponent implements OnInit {

  appPane: FormGroup;
  skipUpdate: boolean;

  constructor() { }

  ngOnInit() {
    this.appPane = new FormGroup({
      decimal: new FormControl(''),
      binary: new FormControl(''),
      octal: new FormControl(''),
      hexa: new FormControl('')
    });

    this.skipUpdate = false;
  }

  // function has 2 param, oldValue is not mandatory, since event value will come to $event, so can be access by any param name.
  onDecimalChange = function (oldValue, newValue) {
    this.skipUpdate = true;
    if (newValue !== '') {
      this.appPane.patchValue(
        {
          binary: parseInt(newValue, 10).toString(2),
          octal: parseInt(newValue, 10).toString(8),
          hexa: parseInt(newValue, 10).toString(16)
        }
      );
    } else {
      this.appPane.patchValue(
        {
          binary: '',
          octal: '',
          hexa: ''
        }
      );
    }
    this.skipUpdate = false;
  };

  // this function will only change decimal
  onBinaryChange = function (oldValue, newValue) {
    if (!this.skipUpdate) {
      if (newValue !== '') {
        this.appPane.patchValue({ decimal: parseInt(newValue, 2).toString(10) });
      } else {
        this.appPane.patchValue({ decimal: '' });
      }
    }
  };

  // this function will only change decimal
  onOctalChange = function (oldValue, newValue) {
    if (!this.skipUpdate) {
      if (newValue !== '') {
        this.appPane.patchValue({ decimal: parseInt(newValue, 8).toString(10) });
      } else {
        this.appPane.patchValue({ decimal: '' });
      }
    }
  };

  // this function will only change decimal
  onHexaChange = function (oldValue, newValue) {
    if (!this.skipUpdate) {
      if (newValue !== '') {
        this.appPane.patchValue({ decimal: parseInt(newValue, 16).toString(10) });
      } else {
        this.appPane.patchValue({ decimal: '' });
      }
    }
  };

}
