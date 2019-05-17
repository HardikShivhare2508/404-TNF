import { Injectable } from '@angular/core';
import { ISearch } from './interfaces/ISearch';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environments } from './constants/environments';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMovies } from './interfaces/IMovies';
import { ILogin } from './interfaces/ILogin';
import { IRegister } from './interfaces/IRegister';
import { IReview } from './interfaces/IReview';
import { IPassword } from './interfaces/IPassword';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DataProcessingServiceService {
  public moviesData: BehaviorSubject<Array<IMovies>> = new BehaviorSubject<Array<IMovies>>(null);

  constructor(private http: HttpClient , private toastr: ToastrService ) { }

  public getMoviesBasedOnSearch(searchCriteria: ISearch): void {
    this.http
      .get<any>(environments.baseURL + '/movies', {
        params: {
          criteria: searchCriteria.criteria,
          value: searchCriteria.text
        },observe: 'response'
      })
      .subscribe(response => {
          let movies: Array<IMovies> = [];
          let reviewsVal: Array<IReview> = [];
          if(response.body.length > 0) {
            response.body.forEach(element => {
              if(element.reviews != null && element.reviews.length > 0) {
                element.reviews.forEach(review => {
                  reviewsVal.push({
                    email: review.email,
                    reviewText: review.reviewText,
                    movieTitle: review.movieTitle,
                    reviewTitle: review.reviewTitle,
                  });
                });
              }
              movies.push({
                movieId: element.movieId,
                metaScore: element.metaScore,
                boxOffice: element.boxOffice,
                website: element.website,
                imdbRating: element.imdbRating,
                imbdVotes: element.imbdVotes,
                runTime: element.runTime,
                language: element.language,
                rated: element.rated,
                production: element.production,
                released: element.released,
                imdbId: element.imdbId,
                plot: element.plot,
                director: element.director,
                title: element.title,
                actors: element.actors,
                response: element.response,
                type: element.type,
                awards: element.awards,
                dvd: element.dvd,
                year: element.year,
                poster: element.poster,
                country: element.country,
                genre: element.genre,
                writer: element.writer,
                reviews: reviewsVal
              });
            });
            this.moviesData.next(movies);
          }
          else {
            this.moviesData.next(null);
          }
        });
    } 

    public postLoginData(login: ILogin): void {
      console.log(login);
      this.http.post<ILogin>(environments.baseURL + "/login", {
        "email": login.email,
        "password": login.password
      })
      .subscribe((value) => {
        console.log(value);
      }, (error) => {
        console.log(error);
        console.log(error.error.message);
        console.log(error.error.text);
      });
    }

    public postRegisterData(register : IRegister): void{
      console.log(register);
      this.http.post(environments.baseURL + "/register",{
        firstName : register.firstName,
        lastName : register.lastName,
        email :register.email,
        password: register.password,
        validatePassword: register.validatePassword
      }).subscribe((value)=>{
         console.log(value);
      }, (error) =>{
          console.log(error.error.message);
      });
    }


    public postForgotPasswordData(forgotPasswordData : IPassword): void{
      this.http.post(environments.baseURL + "/forgotPassword",{
        email: forgotPasswordData.email,
        tempPassword: forgotPasswordData.tempPassword,
        updatedPassword: forgotPasswordData.updatedPassword
      },{responseType: 'text'}).subscribe(
         (val) => {
           if (val === "Password Updated") {
             this.toastr.success(val , null , {
              positionClass:'toast-top-full-width'
            } )
           } else {
             this.toastr.error(val , null , {
              positionClass:'toast-top-full-width'
            } );
           }
         }
        );
    }
}