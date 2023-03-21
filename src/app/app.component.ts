import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {
    this.formInit();
  }

  form!: FormGroup;

  public formInit() {
    this.form = this.fb.group({
      country: this.fb.array([
        this.fb.group({
          name: ['vahid'],
          family: ['darabi'],
        }),
      ]),

      address: this.fb.array([
        this.fb.group({
          name: ['Angular'],
          checked: [false],
        }),
        this.fb.group({
          name: ['php'],
          checked: [false],
        }),
        this.fb.group({
          name: ['java'],
          checked: [false],
        }),
      ]),
    });
  }

  public get address() {
    return this.form.get('address') as FormArray;
  }
  public get country() {
    return this.form.get('country') as FormArray;
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
