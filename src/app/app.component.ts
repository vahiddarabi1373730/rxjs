import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MathValidation } from './validation';
import { debounceTime, delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public correctNumber: number = 0;
  public secondPerSolution: number = 0;
  constructor(private fb: FormBuilder) {}

  highlight(a, b, total) {
    if (a + b * 0.8 < total) {
      return true;
    }
    return false;
  }
  ngOnInit(): void {
    const startTime = new Date();
    this.form.controls['total'].valueChanges.subscribe((res) => {
      const total = this.a + this.b;

      if (parseInt(res) === total) {
        this.correctNumber++;
        this.secondPerSolution =
          (new Date().getTime() - startTime.getTime()) /
          this.correctNumber /
          1000;
        this.form.patchValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          total: '',
        });
      }
    });
  }

  public form: FormGroup = new FormGroup(
    {
      a: this.fb.control(this.randomNumber()),
      b: this.fb.control(this.randomNumber()),
      total: this.fb.control(''),
    },
    [MathValidation.additional('total', 'a', 'b')]
  );

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

  public get a() {
    return this.form.controls['a'].value;
  }
  public get b() {
    return this.form.controls['b'].value;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
