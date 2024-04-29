import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private appService: AppService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.appService.user$.pipe(
      map(user => {
        if (!user) {
          this.router.navigateByUrl('/');
          return false;
        }
        switch (user.type) {
          case 'User':
            return true; // Allow access to user routes
          case 'Doctor':
            this.router.navigateByUrl('/doctor');
            return false;
          case 'Admin':
            this.router.navigateByUrl('/admin');
            return false;
          default:
            this.router.navigateByUrl('/');
            return false;
        }
      })
    );
  }
}
