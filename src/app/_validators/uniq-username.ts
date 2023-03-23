import { EMPTY, catchError, filter, of, tap, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UniqUserName implements AsyncValidator {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://api.angular-email.com';
  validate(control: AbstractControl) {
    return this?.http
      ?.post(this.baseUrl + '/auth/username', {
        username: control.value,
      })
      .pipe(
        filter((res: any) => res.available),
        map((res) => {
          return null;
        }),
        catchError((err) => {
          if (err.error.username) {
            return of({ noneUniqUsername: true });
          } else {
            return of({ unknownError: true });
          }
        }),
        tap((res) => console.log(res))
      );
  }
}
