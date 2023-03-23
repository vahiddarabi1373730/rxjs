import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/authService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.authService.checkSignIn().subscribe();
  }
}
