import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  // @Output()
  // login: EventEmitter<string> = new EventEmitter<string>;

  login = output<string>();

  userName: string = 'Adrian!'

  handleLogin() {
    this.login.emit(this.userName);
  }
}
