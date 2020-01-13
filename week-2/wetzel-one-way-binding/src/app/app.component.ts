/*
============================================
; Title:  Exercise 2.2
; Author: Loren Wetzel
; Date:   13 January 2020
; Modified By:
; Description: Create one-way binding and guidelines for
;   creating and managing components
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{ name }}<h1><button (click)="changeName()">Change Name</button>',
  styles: ['h1{color:red}']
})

export class AppComponent {
  title = 'wetzel-one-way-binding';

  //class property
  name:string = "Mr Wetzel";

  //change name function
  changeName(){
    this.name = "Loren Wetzel";
  }
}

