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

import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-fruit',
  template: `
  <div class="container">
    <div class="row">
      <h2>Fruit Details</h2>
      <table class="table table-hover table-striped">
        <thead class="tbl-header">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ fruit.id }}</td>
            <td>{{ fruit.name }}</td>
            <td>{{ fruit.color }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
  styles: [`
  .tbl-header {
    background-color: steelblue;
    color:white;
  }
`],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {

  fruit: Fruit;

  constructor(fruitService: FruitService) {
    this.fruit = fruitService.getFruit();
  }

  ngOnInit() {
  }

}
