/*
============================================
; Title:  Assignment 6.4
; Author: Loren Wetzel
; Date:   10 February 2020
; Modified By:
; Description: component lifecycle and onChange() events.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wetzel-onchange-events';

  myGreeting = 'hello';
  myUser: {name: string} = {name:'John'}
}
