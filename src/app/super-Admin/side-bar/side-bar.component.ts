import { Component, EventEmitter, Output } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
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
export class SideBarComponent {
  sidebarCollapsed = true;
  @Output() sidebarToggled = new EventEmitter<boolean>();
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
   this.sidebarToggled.emit(this.sidebarCollapsed);
    }
}
