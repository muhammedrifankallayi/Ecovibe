import { Component, ElementRef, Input, ViewChild ,OnInit ,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent  implements OnInit {
 




ngOnInit(): void {
  
}

status:boolean = false
statusText:string = "off"
statusChange(){
 if(this.status==false){
  this.status =false
  this.statusText = 'off'
 }else{
  this.status = true
  this.statusText = 'on'
 }
}


    




}
