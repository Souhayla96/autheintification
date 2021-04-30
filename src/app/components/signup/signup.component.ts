import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // signupForm: FormGroup;
  // signupForm: FormGroup;
  registerationForm!: FormGroup;
  user: User | undefined ;
  userSubmitted:boolean | undefined;
  constructor(   public fb: FormBuilder,
    public authService: AuthService,
    public router: Router) {
      // this.signupForm = this.fb.group({
      //   name: [''],
      //   email: [''],
      //   password: ['']
      // })
    }

  ngOnInit(): void {
    this.createRegestrationForm();
  }

  createRegestrationForm(){
    this.registerationForm= this.fb.group({
      FirstName: [null,Validators.required],
      LastName: [null,Validators.required],
      Email:[ null,[Validators.required,Validators.email]],
      UserName: [null,Validators.required],
      Password: [null,[Validators.required,Validators.minLength(8)]],
      ConfirmPassword:[null,[Validators.required]],
      Role:4

    },);
    this.registerationForm.controls['FirstName'].setValue('Default Value')
  }
  get FirstName(){
    return this.registerationForm.get('FirstName') as FormControl;

  }
  get LastName(){
    return this.registerationForm.get('LastName') as FormControl;

  }
  get Email(){
    return this.registerationForm.get('Email') as FormControl;

  }
  get UserName(){
    return this.registerationForm.get('UserName') as FormControl;

  }
  get Password(){
    return this.registerationForm.get('Password') as FormControl;

  }

  userData() :User{
    return this.user={
      FirstName:this.FirstName.value,
      LastName:this.LastName.value,
      Email:this.Email.value,
      UserName:this.UserName.value,
      Password:this.Password.value,

    }}

  registerUser() {
    this.authService.signUp(this.registerationForm.value).subscribe((res) => {
      if (res.result) {
        this.registerationForm.reset()
        this.router.navigate(['log-in']);
      }
    })
  }

}
