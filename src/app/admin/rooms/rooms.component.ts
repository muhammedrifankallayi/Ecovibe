import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AddRoomComponent } from '../add-room/add-room.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  constructor(private dialog:MatDialog){}

openAddRooms(){
  this.dialog.open(AddRoomComponent,{width:"600px",data:{}})
}



}
