import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    ChildComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  text: string = "Variable desde el padre"

  person: any = {
    sex: "hombre",
    age: 30
  }
}
