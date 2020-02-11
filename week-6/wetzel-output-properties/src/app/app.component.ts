/*
============================================
; Title:  Exercise 6.3
; Author: Loren Wetzel
; Date:   10 February 2020
; Modified By:
; Description: output properties
;===========================================
*/

import { Component } from '@angular/core';
import { PriceQuote } from './price-quote/iprice-quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wetzel-output-properties';

  priceQuote: PriceQuote;

  priceQuoteHandler(event: PriceQuote){
    this.priceQuote = event;
  }
}
