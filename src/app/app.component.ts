import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  output: any;
  input: any;
  title = 'rxjs';

  post = [{ name: 'vahid' }];
  onChangeInput(input: any) {
    this.output = input;
  }
}
