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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wetzel-query-params';
  userId = 1098;
}
