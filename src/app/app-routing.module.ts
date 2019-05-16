import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import {LandingComponent} from './landing/landing.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: 'home', component: Page1Component },
  { path: '', component: LandingComponent },
  { path: 'signin', component: SigninComponent },
  { path:'signup', component: SignupComponent },
  { path: 'movielist', component: MovieListComponent},
  { path: 'movie', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
