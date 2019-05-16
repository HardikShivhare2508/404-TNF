import { Component, OnInit } from '@angular/core';
import { DataProcessingServiceService } from '../data-processing-service.service';
import { IMovies } from '../interfaces/IMovies';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public moviesData: Array<IMovies> = [];

  constructor(private router: Router, private dps: DataProcessingServiceService) { }

  public ngOnInit(): void {
    this.dps.moviesData.subscribe(val => {
        this.moviesData = val;
    });
  }

  public redirectToPage(movieId: number) {
    this.router.navigate(['/movie'], { queryParams: { id: movieId} });
  }
}
