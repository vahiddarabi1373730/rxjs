import { Router } from '@angular/router';
import { AuthService } from './../authService';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MathPassword } from 'src/app/_validators/mathPassword';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    username: this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),

    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
  });

  public get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.authService.signIn(this.form.value).subscribe((res) => {
      this.router.navigate(['inbox']);
    });
  }
}
