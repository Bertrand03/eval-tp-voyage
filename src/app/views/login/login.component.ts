import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string;
  authForm: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  /**
   * Method for initialize all the controls for the auth form
   */

  initForm(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      });
  }

  /**
   * Method called when the user submit the login form
   */
  onSignIn(): void {

  }

}
