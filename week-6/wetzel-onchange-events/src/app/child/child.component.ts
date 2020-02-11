/*
============================================
; Title:  Assignment 6.4
; Author: Loren Wetzel
; Date:   10 February 2020
; Modified By:
; Description: component lifecycle and onChange() events.
;===========================================
*/

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child">
      <h2>Child</h2>
      <div>Greeting: {{greeting}}</div>
      <div>User Name: {{ user.name }}</div>
    </div>
  `,
  styles: [`
    .child{
      background: lightgray;
    }
  `]
})
export class ChildComponent implements OnChanges {

  @Input() greeting: string;
  @Input() user: {name:string};

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null,2));
  }

}
