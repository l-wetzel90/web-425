/*
============================================
; Title:  Exercise 6.2
; Author: Loren Wetzel
; Date:   10 February 2020
; Modified By:
; Description: input properties
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wetzel-input-properties';

  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }): void {
    this.stock = target.value;
  }
}
