import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataProcessingServiceService } from '../data-processing-service.service';
import { IMovies } from '../interfaces/IMovies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  public movieId: number;
  public movieDetailsData: IMovies;
  
  constructor(private route: ActivatedRoute, private dps: DataProcessingServiceService) { 
    this.route.queryParams.subscribe((params: Params) => {
      this.movieId = +params.id;
   });
  }

  public ngOnInit(): void {
    this.dps.moviesData.subscribe(moviesData => {
      if(moviesData != null) {
        moviesData.forEach((movieData) => {
          if(movieData.movieId === this.movieId) {
            console.log(movieData);
            this.movieDetailsData = movieData; 
          }
        });
      }
    });
  }
}
