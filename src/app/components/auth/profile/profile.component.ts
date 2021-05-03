import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../shared/auth.service';

// User interface
export class User {
  name: String;
  email: String;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  UserProfile: User;

  constructor(
    public authService: AuthService
  ) {
    this.authService.profileUser().subscribe((data:any) => {
      this.UserProfile = data;
    })
  }

  ngOnInit() { }

}