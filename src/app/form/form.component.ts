import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  dataForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.dataForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      select: [null]
    });
  }
  get firstName() {
    return this.dataForm.get('firstName');
  }
  get lastName() {
    return this.dataForm.get('lastName');
  }
  get hasDropDownError() {
    return (
      this.dataForm.get('select').touched &&
      this.dataForm.get('select').errors &&
      this.dataForm.get('select').errors.required
    );
  }

  onSubmit() {
      if (this.dataForm.invalid) {
        this.dataForm.controls['firstName'].markAsTouched();
        this.dataForm.controls['lastName'].markAsTouched();
        this.dataForm.controls['select'].markAsTouched();
      } else {
        console.log('Data form', this.dataForm.value);
      }
    // this.dataForm.valueChanges.subscribe(val => console.log(val));

  }

}
