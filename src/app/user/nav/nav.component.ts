import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private router: Router) {}
  shouldShowNav(): boolean {
    // Get the current route URL
    const currentUrl = this.router.url;

   
    return !currentUrl.includes('login') && !currentUrl.includes('register') && !currentUrl.includes('admin')&& !currentUrl.includes("superAdmin");
  }

Logout(){
  localStorage.removeItem("token")
  this.router.navigate(["/login"])
}


}
