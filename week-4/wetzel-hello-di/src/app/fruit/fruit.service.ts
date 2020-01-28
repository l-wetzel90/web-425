/*
============================================
; Title:  Exercise 4.2
; Author: Loren Wetzel
; Date:   27 January 2020
; Modified By:
; Description: inversion of control and
;   dependency injection
;===========================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  getFruit(): Fruit{
    return new Fruit(1,"Blueberry","Blue")
  }

  constructor() { }
}
