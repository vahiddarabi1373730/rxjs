import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    this.password = 0;
  }
  numbersCharacters = '123456';
  letterCharacters = 'asdfgh';
  symbolsCharacters = '@#$%^*)';
  lengthPassword!: number;
  password: any;
  letterCheckbox: boolean = false;
  numberCheckbox: boolean = false;
  symbolCheckbox: boolean = false;
  validChar = '';
  generationPassword: string = '';

  onchangeLength(event: any) {
    this.lengthPassword = event;
  }
  onChangeLetter(event: any) {
    this.letterCheckbox = !this.letterCheckbox;
  }
  onChangeNumber() {
    this.numberCheckbox = !this.numberCheckbox;
  }
  onChangeSymbol() {
    this.symbolCheckbox = !this.symbolCheckbox;
  }

  disabledButton() {
    if (
      (!this.letterCheckbox && !this.symbolCheckbox && !this.numberCheckbox) ||
      !this.lengthPassword
    ) {
      return true;
    } else {
      return false;
    }
  }

  generatePassword() {
    this.generationPassword = '';

    if (this.letterCheckbox) {
      this.validChar += this.letterCharacters;
    }
    if (this.numberCheckbox) {
      this.validChar += this.numbersCharacters;
    }
    if (this.symbolCheckbox) {
      this.validChar += this.symbolsCharacters;
    }

    for (let i = 0; i < this.lengthPassword; i++) {
      const index = Math.floor(Math.random() * this.validChar.length);
      this.generationPassword += this.validChar[index];
    }
    this.password = this.generationPassword;
  }
}
