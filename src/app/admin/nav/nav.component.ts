import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
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
  sidebarCollapsed = true;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
