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

  onSubmit() {
    console.log('Data form', this.dataForm.value);
    // this.dataForm.valueChanges.subscribe(val => console.log(val));

  }

}
