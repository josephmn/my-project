import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor() {
    this.name = new FormControl('');
    this.duration = new FormControl('');
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      nombre: this.name,
      duracion: this.duration,
      director: this.director
    });
  }

  handleSubmit() {
    console.log(this.movieForm.value);
  }
}
