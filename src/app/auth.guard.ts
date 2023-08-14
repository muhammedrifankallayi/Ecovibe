import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const url = state.url;

  // Check if the URL includes 'login' or 'register'
  if (url.includes('login') || url.includes('register')) {
    // Redirect to a different route or prevent access
    // For example, redirect to the home page
    window.location.href = '/'; // Redirect to home page
    return false; // Prevent access to the login and register pages
  }
 


  return true;
};
