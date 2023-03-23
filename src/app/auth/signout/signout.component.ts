import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService';
import { delay } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css'],
})
export class SignoutComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService
      .signOut()
      .pipe(delay(2000))
      .subscribe((res) => {
        this.authService.behaviorSubject$.next(false);
        this.router.navigate(['']);
      });
  }
}
