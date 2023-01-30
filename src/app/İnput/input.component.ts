import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;
  //Başlangıç değeri ataması olmadığı için ! yazdım.
  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    return this.control.dirty && this.control.touched && this.control.errors;
    /*Başka bir yazım şekli:
    const{dirty,touched,errors} = this.control;
    return dirty && touched && errors;
    */
  }
}
