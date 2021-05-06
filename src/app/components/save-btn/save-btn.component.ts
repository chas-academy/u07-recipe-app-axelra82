import { Component } from '@angular/core';
import { TokenService } from '../auth/shared/token.service';

@Component({
  selector: 'app-save-btn',
  templateUrl: './save-btn.component.html',
  styleUrls: ['./save-btn.component.scss']
})
export class SaveBtnComponent {
  
  isLoggedIn: boolean = false;

  constructor(
    private token: TokenService,
  ) {
    this.isLoggedIn = this.token.isLoggedIn();
  }
  
}
