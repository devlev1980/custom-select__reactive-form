import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomSelectComponent),
    multi: true,
  }]
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {
  onChange: (val: string) => void;
  onTouched: () => void;

  showOptions = false;
  option = '';

  options = [
    'Option 1',
    'Option 2',
    'Option 3'
  ];
  constructor() { }


  ngOnInit() {
  }
  onShowOptions() {
    this.showOptions = !this.showOptions;
  }
  onSelectOption(option) {
    this.option = option;
    this.showOptions = false;
  }




  touch() {
    this.onTouched();
  }

  change(val: string) {
    this.option = val;
    this.showOptions = false;
    this.onChange(val);
  }

  writeValue(value: string) {

    console.log(`write value ${value}`);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
    console.log('onChange');
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
    console.log('onTouched');
  }

  setDisabledState() { }





}
