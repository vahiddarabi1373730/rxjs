import { AuthService } from './../authService';
import { UniqUserName } from './../../_validators/uniq-username';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MathPassword } from 'src/app/_validators/mathPassword';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private uniqUsername: UniqUserName,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup(
    {
      username: this.fb.control(
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
        [this.uniqUsername.validate.bind(this.uniqUsername)]
      ),

      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      passwordConfirmation: this.fb.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
    },
    [MathPassword.validate]
  );

  public get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.authService.post(this.form.value).subscribe((res) => {
      this.authService.behaviorSubject$.next(true);
      this.router.navigate(['inbox']);
    });
  }
}
