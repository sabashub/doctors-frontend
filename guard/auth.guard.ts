// // auth.guard.ts

// import { Injectable } from '@angular/core';
// import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AppService } from '../src/app/app.service';


// @Injectable()
// export class AuthGuard implements CanActivate {

//   constructor(private appService: AppService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
//     // Subscribe to the user$ observable to get the current user
//     this.appService.user$.subscribe(user => {
//       if (!user) {
//         // Redirect to the login page if user is not logged in
//         this.router.navigateByUrl('/');
//         return false;
//       }

//       // Check user's type and restrict access to routes based on their type
//       switch (user.type) {
//         case 'User':
//           if (state.url === '/user') {
//             return true; // Allow access to user routes
//           } else {
//             this.router.navigateByUrl('/'); // Redirect to login page if user is trying to access unauthorized route
//             return false;
//           }
//         case 'Doctor':
//           if (state.url === '/doctor') {
//             return true; // Allow access to doctor routes
//           } else {
//             this.router.navigateByUrl('/'); // Redirect to login page if user is trying to access unauthorized route
//             return false;
//           }
//         case 'Admin':
//           if (state.url === '/admin') {
//             return true; // Allow access to admin routes
//           } else {
//             this.router.navigateByUrl('/'); // Redirect to login page if user is trying to access unauthorized route
//             return false;
//           }
//         default:
//           this.router.navigateByUrl('/'); // Redirect to login page for unknown user type
//           return false;
//       }
//     });
//     return true;
//   }
// }
