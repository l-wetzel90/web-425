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
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Injectable()
export class UnsavedChangesGuard
                  implements CanDeactivate<ProductDetailComponent> {

  canDeactivate(component: ProductDetailComponent) {

    if (component.name.dirty) {
       return window.confirm("You have unsaved changes. Still want to leave?");
    } else {
      return true;
    }
  }
}

