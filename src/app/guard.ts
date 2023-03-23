import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, skipWhile, take, tap, map } from 'rxjs';
import { AuthService } from './auth/authService';
@Injectable({
  providedIn: 'root',
})
export class Guard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.checkSignIn().pipe(
      tap((res) => {
        if (res.authenticated === false) {
          this.router.navigate(['']);
        }
      }),

      map((x) => {
        return true;
      })
    );
  }
}
