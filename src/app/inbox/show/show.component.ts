import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email-service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService
  ) {
    this.activatedRoute.data.subscribe((res) => {
      this.email = res;
    });
  }
  id;
  email;

  ngOnInit(): void {
    console.log(this.activatedRoute);

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          return this.emailService.getEmailById(id);
        })
      )
      .subscribe((res) => {
        this.email = res;
      });
  }
}
