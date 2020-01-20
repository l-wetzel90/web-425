/*
============================================
; Title:  Exercise 3.4
; Author: Loren Wetzel
; Date:   19 January 2020
; Modified By:
; Description: mediate the navigation to and
;   from a route with route guards
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="home">The Home Component</h1>
  `,
  styles: [`
    .home { background-color: yellow; }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
