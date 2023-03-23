import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username;
  constructor(private http: HttpClient) {}
  public behaviorSubject$ = new BehaviorSubject<boolean>(false);
  baseUrl = 'https://api.angular-email.com';
  post(model) {
    return this.http.post(this.baseUrl + '/auth/signup', model);
  }

  checkSignIn() {
    return this.http.get(this.baseUrl + '/auth/signedin').pipe(
      tap((res: any) => {
        this.username = res.username;
        if (res.authenticated) {
          this.behaviorSubject$.next(true);
        }
      })
    );
  }

  signOut() {
    return this.http.post(this.baseUrl + '/auth/signout', {});
  }

  signIn(model) {
    return this.http
      .post(this.baseUrl + '/auth/signin', model)
      .pipe(tap((res) => this.behaviorSubject$.next(true)));
  }
}
