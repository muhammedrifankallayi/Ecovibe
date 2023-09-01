import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class superAdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const jwtToken = localStorage.getItem('superAdminToken');
    const loginRoute = '/superAdmin';

    if (state.url !== loginRoute && jwtToken === null) {
      this.router.navigate(['/superAdmin']);
      return false; // Prevent access to the route
    } else if (state.url === loginRoute && jwtToken !== null) {
      this.router.navigate(['/superAdmin/dashboard']);
      return false; // Prevent access to the route
    }

    return true; // Allow access to the route
  }
}
