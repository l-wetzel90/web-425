import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product">
      <h1>Information for Product: {{ productId }}</h1>
      <router-outlet></router-outlet>
      <p><a [routerLink]="['./seller',sellerId]">Seller Details</a></p>
    </div>
  `,
  styles: [`
    .product{
      background-color: rgb(220, 241, 241);
    }
  `
  ]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId = 9876;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
