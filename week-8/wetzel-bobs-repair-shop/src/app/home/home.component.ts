import { Component, OnInit } from '@angular/core';
// import { ServicesComponent } from './services.component';

@Component({
  selector: 'app-home',
  template: `
      <mat-sidenav-container class="example-container">

        <mat-sidenav mode="side" opened>Side</mat-sidenav>

        <mat-sidenav-content>
          <app-services></app-services>
        </mat-sidenav-content>

      </mat-sidenav-container>
  `,
  styles: [`
  .example-container {
    position: absolute;
    top: 64px;
    bottom: 1px;
    left: 0;
    right: 0;
  }

  mat-sidenav{
    width: 200px;
    display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  }

  mat-sidenav-content{
    padding: 10px;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
