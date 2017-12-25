import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './admin/auth/auth.component';
import { IndexComponent } from './admin/auth/index/index.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

// import * as $ from 'jquery';
// window['$'] = window['jQuery'] = $;

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
=======


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> chore: initial commit from @angular/cli
})
export class AppModule { }
