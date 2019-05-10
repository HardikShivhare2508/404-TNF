import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Page1Component } from './page1/page1.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Page1Component,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
