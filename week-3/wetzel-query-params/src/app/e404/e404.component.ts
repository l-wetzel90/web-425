/*
============================================
; Title:  Exercise 3.2
; Author: Loren Wetzel
; Date:   17 January 2020
; Modified By:
; Description: how to pass data between routes
;   and how to gracefully handle 404 errors
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>Whatever You Are Looking For Can't Be Found</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container{
      margin-top: 20px;
    }
    h2{
      color: red;
    }
    `
  ]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
