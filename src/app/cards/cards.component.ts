import { Component, OnInit, Input } from '@angular/core';
interface postsInterface {
  title: string;
  image: string;
  username: string;
  content: string;
}
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() title!: string;
  @Input() image!: string;
  @Input() username!: string;
  @Input() content!: string;
}
