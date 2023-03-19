import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs';
  inputText: string = '';
  result: boolean = false;
  randomText: string = 'man vahid darabi hastm az tehran';

  onChangeInput(text: any) {
    this.inputText = text;
  }

  compare(letter: string, inputTextt: string) {
    if (!inputTextt) {
      return '';
    }
    return inputTextt === letter ? 'is-success' : 'is-danger';
  }
}
