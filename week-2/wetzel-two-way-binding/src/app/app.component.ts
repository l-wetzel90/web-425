/*
============================================
; Title:  Exercise 2.3
; Author: Loren Wetzel
; Date:   13 January 2020
; Modified By:
; Description: Create two-way binding and guidelines for
;   creating and managing components
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid two-way-form">
      <h2>Two Way Binding Example</h2><br>
      <div class="form-group">
        <input type="text" class="form-control"
            placeholder="Enter your name please"
            [(ngModel)]="name">

        <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
      </div>

      <div class="form-group">
        <p class="alert-success">Hey {{name}} this is pretty cool huh?</p>
      </div>

    </div>
  `,
  styles:[ `
    .two-way-form{
      max-width: 50%;
    }
    `
  ]
})
export class AppComponent {
  title = 'wetzel-two-way-binding';

  //class property
  name: string;
}
