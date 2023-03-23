import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.angular-email.com';
  getEmails() {
    return this.http.get(this.baseUrl + '/emails');
  }

  getEmailById(id) {
    return this.http.get(this.baseUrl + `/emails/${id}`, id);
  }

  sendEmail(email) {
    return this.http.post(this.baseUrl + '/emails', email);
  }
}
