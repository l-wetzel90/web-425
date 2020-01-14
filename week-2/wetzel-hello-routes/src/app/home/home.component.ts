/*
============================================
; Title:  Exercise 2.4
; Author: Loren Wetzel
; Date:   13 January 2020
; Modified By:
; Description: implement basic routing in an Angular application
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">
  <div class="row">
    <h2>The Home Page</h2>
  </div>
</div>
  `,
  styles: [ `
  .container{
    margin-top: 20px;
  }
  h2 {
    color: purple;
  }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
