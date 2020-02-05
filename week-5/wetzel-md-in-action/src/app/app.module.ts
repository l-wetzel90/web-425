/*
============================================
; Title:  Assignment 5.4
; Author: Loren Wetzel
; Date:   3 February 2020
; Modified By:
; Description: build layout pages using the flex-layout
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
