import { IReview } from './IReview';

export interface IMovies {
    movieId: number;
    metaScore: string;
    boxOffice: string;
    website: string;
    imdbRating: string;
    imbdVotes: string;
    runTime: string;
    language: string;
    rated: string;
    production: string;
    released: Date;
    imdbId: string;
    plot: string;
    director: string;
    title: string;
    actors: string;
    response: string;
    type: string;
    awards: string;
    dvd: Date;
    year: string;
    poster: string;
    country: string;
    genre: string;
    writer: string;
    reviews: Array<IReview>;
}
