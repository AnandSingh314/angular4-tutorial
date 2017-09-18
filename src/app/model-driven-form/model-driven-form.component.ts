import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      languages: new FormControl('')
    });
  }

  onSubmit = function (userForm: any): any {
    console.log(userForm.value);
    console.log(userForm.valid);
    console.log(userForm);
  };
}
