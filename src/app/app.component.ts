import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet, 
    // HeaderComponent, 
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies: string[] = ['Star Wars', 'Game of Thron', 'Back to future', 'Angry Birds'];
  animals: any = [
    {
        id: 1,
        name: "dog",
        img: "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"
    },
    {
        id: 2,
        name: "cat",
        img: "https://purina.com.pe/sites/default/files/2022-10/Que_debes_saber_antes_de_adoptar_un_gatito.jpg"
    },
    {
        id: 3,
        name: "bird",
        img: "https://cdn0.expertoanimal.com/es/posts/3/3/8/caracteristicas_de_las_aves_24833_600.jpg"
    },
];
}
