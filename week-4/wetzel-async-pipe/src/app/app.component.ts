/*
============================================
; Title:  Exercise 4.4
; Author: Loren Wetzel
; Date:   27 January 2020
; Modified By:
; Description: asynchronous pipes and observable arrays
;===========================================
*/

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from './fruit';
import { FruitService } from './fruit.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <h2>Fruit Details</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price Per Pound</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let fruit of fruits$ | async">
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.pricePerPound}}</td>
              <td>{{ fruit.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wetzel-async-pipe';

  fruits$: Observable<Fruit[]>;

  constructor(private fruitService: FruitService) {}

  ngOnInit(){
    this.fruits$ = this.fruitService.getFruits();
  }
}
