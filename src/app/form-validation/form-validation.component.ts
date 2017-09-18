import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[\\w\\-\s\\/]+')
      ])),
      phone: new FormControl('', this.customValidator),
      languages: new FormControl('')
    });
  }

  customValidator(control: any) {
    if (control.value.length === 5) {
      return { phone: true };
    } else {
      return {phone : false};
    }
  }

  onSubmit = function (userForm: any): any {
    console.log(userForm.value);
    console.log(userForm.valid);
    console.log(userForm);
  };

}
