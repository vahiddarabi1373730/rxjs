import { Component, Input, OnInit } from '@angular/core';
import { EmailService } from '../email-service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public emails;
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.emailService.getEmails().subscribe((res) => {
      this.emails = res;
    });
  }
}
