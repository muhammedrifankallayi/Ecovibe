import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const jwtToken = localStorage.getItem('adminToken');
    const loginRoute = '/admin';

    if (state.url !== loginRoute && jwtToken === null) {
      this.router.navigate(['/admin']);
      return false; // Prevent access to the route
    } else if (state.url === loginRoute && jwtToken !== null) {
      this.router.navigate(['/admin/dashboard']);
      return false; // Prevent access to the route
    }

    return true; // Allow access to the route
  }
}
