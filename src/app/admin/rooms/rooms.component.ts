import { Component ,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { AddRoomComponent } from '../add-room/add-room.component';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent  implements OnInit {

  rooms:any

ngOnInit(): void {
  this.service.getRooms().subscribe((res:any)=>{
   this.rooms = res.data
   console.log(res.data);
   
  })
}

  constructor(private dialog:MatDialog ,private service:AdminService){}

openAddRooms(){
  this.dialog.open(AddRoomComponent,{width:"600px",data:{}})
}



}
