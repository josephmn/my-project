import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import Movie from '../../models/movie.models';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  selectedMovie?: Movie;

  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService
  ) {
    const movieName = this.route.snapshot.params['movieName'];
    console.log(movieName);
    this.selectedMovie = this.movieService.getMovie(movieName);
  }
}
