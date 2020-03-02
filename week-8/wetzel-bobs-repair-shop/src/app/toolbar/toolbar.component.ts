import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
  <mat-toolbar class="menu" role="header" color="primary">
  <mat-toolbar-row>
    <button mat-button class="toolbar__icon-button mat-button">
      <mat-icon>computer</mat-icon>
      <span style="margin-left: 5px !important;">&nbsp;Bob's Computer Repair Shop</span>
    </button>
    <button mat-button class="mat-button">
      About
    </button>
    <button mat-button class="mat-button">
      Contact Us
    </button>

  </mat-toolbar-row>
</mat-toolbar>
  `,
  styles: [`
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    color: white;
  }

  `]
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
