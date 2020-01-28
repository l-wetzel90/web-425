/*
============================================
; Title:  Exercise 4.4
; Author: Loren Wetzel
; Date:   27 January 2020
; Modified By:
; Description: asynchronous pipes and observable arrays
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { Observable, of } from 'rxjs';
// import 'rxjs/add/observable/of';

@Injectable()
export class FruitService {

  fruits: Fruit[] = [
    { id: 1, name: "Blueberry", pricePerPound: "4.99", quantity: 2 },
    { id: 2, name: "Apple", pricePerPound: "2.87", quantity: 5 },
    { id: 3, name: "Orange", pricePerPound: "3.56", quantity: 8 },
    { id: 4, name: "Grape", pricePerPound: ".99", quantity: 10 },
    { id: 5, name: "Kiwi", pricePerPound: "8.45", quantity: 1 }
  ]

  constructor() { }

  getFruits(): Observable<Fruit[]>{
    return of(this.fruits);
  }
}
