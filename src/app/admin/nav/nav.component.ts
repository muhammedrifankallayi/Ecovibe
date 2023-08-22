import { Component ,EventEmitter,Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [
    trigger('sidebarState', [
      state('collapsed', style({
        width: '0px',  // Adjust width as needed
      })),
      state('expanded', style({
        width: '200px', // Adjust width as needed
      })),
      transition('collapsed <=> expanded', animate('250ms ease-in')),
    ]),
  ]
})
export class NavComponent {

  constructor(private route:Router){}

  sidebarCollapsed= true;

  @Output() sideBarToggled = new EventEmitter<boolean>()


  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    this.sideBarToggled.emit(this.sidebarCollapsed)
  }


// navigations   

  NavigattBooking(){
  this.route.navigate(['admin/bookings'])
  }

  logout(){
    localStorage.removeItem("adminToken")
    this.route.navigate(['/admin'])
  }
  about(){
    this.route.navigate(['admin/about'])
  }

  gallery(){
    this.route.navigate(['admin/gallery'])
  }

  dashboard(){
    this.route.navigate(['admin/'])
  }

  facilities(){
    this.route.navigate(['admin/facilities'])
  }

  
}
