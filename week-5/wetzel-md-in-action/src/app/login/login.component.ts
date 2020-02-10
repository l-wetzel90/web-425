/*
============================================
; Title:  Exercise 5.4
; Author: Loren Wetzel
; Date:   10 February 2020
; Modified By:
; Description: build layout pages using the flex-layout
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
  <div class="wrapper" >
  <div class="frm-login">
    <mat-card class="login-panel frm-login-panel">
      <mat-card-header class="frm-login-header">
        <mat-toolbar class="frm-login-toolbar">
          Login Form
        </mat-toolbar>
      </mat-card-header>

      <mat-card-content class="frm-login-body">
        <mat-form-field>
          <input type="text" matInput [(ngModel)]="username" placeholder="Username">
        </mat-form-field>

        <mat-form-field>
          <input type="password" matInput [(ngModel)]="password" placeholder="Password">
        </mat-form-field>

      </mat-card-content>

      <mat-card-actions class="frm-login-actions">
        <button mat-raised-button class="btn-login" (click)="onClear()">Cancel</button>
        <button mat-raised-button class="btn-login" (click)="onSubmit()">Sign In</button>
      </mat-card-actions>
    </mat-card>
  </div>
</div>
  `,
  styles: [`
  /* Forms */
  .frm-login { width: 50%;  margin: 0 auto; }
  .frm-login-panel { border: 1px solid black; }
  .frm-login-header { background-color: orange; }
  .frm-login-toolbar { background-color: orange; color: white; }
  .frm-login-body { display: flex; flex-direction: column; margin-top: 15px; }
  .btn-login { background-color: blueviolet; color: white; }
  .frm-login-actions { text-align: right; }

  /* Global */
  .wrapper { width: 100%; margin: 15px auto;}
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
