import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * Method for log a user
   */
  onSignIn(user: User): void {
    this.authService.login(user)
      .then(() => {
        this.router.navigate(['']);
      }, (err) => {
        this.errorMsg = err;
      });
  }

}
