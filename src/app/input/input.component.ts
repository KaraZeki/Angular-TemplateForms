import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() control!:FormControl;
  @Input() label!:string;
  constructor() { }

  ngOnInit(): void {
  }

  showErrors(){
    return this.control.errors&&this.control.dirty&&this.control.touched;
  }
  // consoloObject(){
  //   console.log(this.control.errors!['minlength']['requiredLength']);

  // }

}
