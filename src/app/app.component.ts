import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs';
  currentItem: number = 0;

  items = [
    { title: 'test1', url: 'assets/1-red.png' },
    { title: 'test2', url: 'assets/2-blue.png' },
    { title: 'test3', url: 'assets/3-orange.png' },
    { title: 'test4', url: 'assets/1.jpg' },
    { title: 'test5', url: 'assets/2.jpg' },
    { title: 'test6', url: 'assets/3.jpg' },
  ];

  onNext() {
    if (this.currentItem === this.items.length - 1) return;
    this.currentItem += 1;
  }
  onPrevious() {
    if (this.currentItem === 0) return;
    this.currentItem -= 1;
  }

  checkWindowIndex(index: number) {
    return Math.abs(this.currentItem - index) < 5;
  }
}
