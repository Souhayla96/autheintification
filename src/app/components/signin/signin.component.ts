import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // signinForm: FormGroup;

  test:string | undefined;
  loginForm!: FormGroup;
  submitted=false;
  // loading=false;
  loginUserData = {
  }
  constructor(    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router) {
    }

  ngOnInit(): void {
  }
  loginUser() {
    this.authService.signIn(this.loginForm.value)
  }




}
