import { Component } from '@angular/core';
import { trigger, animate, state, style, transition } from '@angular/animations';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
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
export class DashboardComponent {
 
  values = true
  sidebarToggled(value: boolean):any{
     this.values=value
    
  }
 
  

}
