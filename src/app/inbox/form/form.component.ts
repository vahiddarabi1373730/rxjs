import { AuthService } from './../../auth/authService';
import { switchMap, tap } from 'rxjs';
import { EmailService } from './../email-service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  username;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private emailService: EmailService
  ) {}

  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      subject: new FormControl(),
      text: new FormControl(),
      to: new FormControl(),
      from: new FormControl({
        value: this.authService.username + '@angular-email.com',
        disabled: true,
      }),
    });
  }

  @Input() email!: any;
  @Output() closeModal = new EventEmitter();

  onSubmit() {
    this.emailService.sendEmail(this.form.value).subscribe((res) => {
      this.emailService.getEmails().subscribe((res) => {
        this.closeModal.emit();
      });
    });
  }
}
