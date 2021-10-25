import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @Input() label: string;
  @Output() formSubmitEvent: EventEmitter<any>;

  authForm: FormGroup;

  user: User;

  constructor(private formBuilder: FormBuilder) {
    this.user = new User('', ' ');
    this.formSubmitEvent = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Method for initialize all the controls for
   * the auth form
   */
  initForm(): void {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: [' ']
    });
  }

  /**
   * Method called when user submit the form
   */
  onSubmit(): void {
    this.formSubmitEvent.emit(this.user);
  }
}
