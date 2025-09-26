import { Component } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { Child2Component } from './components/child2/child2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ChildComponent,
    Child2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
