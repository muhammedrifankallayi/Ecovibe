import { Component } from '@angular/core';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent {

  values:boolean = true;
  sidebarToggled(value: boolean):void{
    this.values=value
   
 }
}
