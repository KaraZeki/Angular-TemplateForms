import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cardform',
  templateUrl: './cardform.component.html',
  styleUrls: ['./cardform.component.scss']
})
export class CardformComponent implements OnInit {

   cardForm =new FormGroup({
    name:new  FormControl(null,[
      Validators.required,
      Validators.minLength(3)])
   })
  constructor() { }

  ngOnInit(): void {
  }



}