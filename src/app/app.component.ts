import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'test 1',
      image: 'assets/1.png',
      username: 'test1',
      content: 'test1',
    },
    {
      title: 'test 2',
      image: 'assets/2.png',
      username: 'test2',
      content: 'test2',
    },
    {
      title: 'test 3',
      image: 'assets/3.png',
      username: 'test3',
      content: 'test3',
    },
  ];
  title = 'rxjs';
}
