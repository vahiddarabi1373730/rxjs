import { EmailService } from './email-service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Resolver implements Resolve<boolean> {
  constructor(private emailService: EmailService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.emailService.getEmailById(route.params.id).pipe(
      catchError((res) => {
        this.router.navigateByUrl('inbox/notfound');
        return EMPTY;
      })
    );
  }
}
