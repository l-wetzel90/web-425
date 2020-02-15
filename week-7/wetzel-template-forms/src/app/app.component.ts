/*
============================================
; Title:  Exercise 7.2
; Author: Loren Wetzel
; Date:   15 February 2020
; Modified By:
; Description: template-driven forms in an Angular application
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wetzel-template-forms';

  onSubmit(formData){
    console.log(formData);
  }
}
