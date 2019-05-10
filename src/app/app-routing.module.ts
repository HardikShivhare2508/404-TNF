import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import {LandingComponent} from './landing/landing.component';


const routes: Routes = [
  {path: 'home', component: Page1Component},
  {path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
