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
import { FormControl} from '@angular/forms'

@Component({
  selector: 'app-product-detail',
  template: `
    <h1 class="product">Product Detail Component</h1>
    <input placeholder="Enter Your Name" type="text" [formControl]="name">
  `,
  styles: [`
    .product { background-color: orange; }
  `]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
