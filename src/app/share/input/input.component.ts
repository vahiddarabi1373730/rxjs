import { Component, Input, OnInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() control: FormControl;
  ngOnInit(): void {}
}
