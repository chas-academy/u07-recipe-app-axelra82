import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';

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
  
  profile: User;
  
  constructor(
    public authService: AuthService,
    private token: TokenService,
  ) {
    this.authService.profile().subscribe((data:any) => {
      this.profile = data;
    })
    
  }

  ngOnInit() { }
}