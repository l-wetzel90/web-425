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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <div class="container">
      <div class="row">
        <h2>Information for User {{ userID }}</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container{
      margin-top: 20px;
    }
    h2{
      color: purple;
    }
    `
  ]
})
export class UserComponent implements OnInit {
  userID: string;

  constructor(route: ActivatedRoute) {
    this.userID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
