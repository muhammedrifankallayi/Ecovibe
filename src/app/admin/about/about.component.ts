import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  action:boolean = true
  sidebarToggled(value:boolean){
   this.action = value
  }


}
