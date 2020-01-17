import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <div class="row">
        <h2>You Have Reached the Home Page!!!</h2>
        <br>
        <p><a [routerLink]="['./product',productId]">Product</a></p>
      </div>
    </div>
  `,
  styles: [
    `
    .container{
      margin-top: 20px;
    }
    h2{
      color: blueviolet;
    }
    `
  ]
})
export class HomeComponent implements OnInit {
  productId = 3456;

  constructor() { }

  ngOnInit() {
  }

}
