import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  selectedUser: any;

  constructor(
    private route: ActivatedRoute,
    public userService: UserService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
  }

  getUser(id: number) {
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.selectedUser = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
