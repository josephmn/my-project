import { Injectable } from '@angular/core';
import Movie from '../models/movie.models';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[];

  constructor() {
    this.movies = [
      {
        name: "El Señor de los Anillos",
        duration: 300,
        director: "Peter Jackson"
      },
      {
        name: "Harry Potter",
        duration: 350,
        director: "Chris Columbus"
      },
    ]
  }

  addMovie(movie: Movie) {
    this.movies.push(movie);
  }

  getMovie(name: string): Movie | undefined {
    return this.movies.find((movie) => movie.name === name);
  }
}
