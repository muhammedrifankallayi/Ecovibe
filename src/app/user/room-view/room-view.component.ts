import { Component ,OnInit ,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit  {


constructor( @Inject(MAT_DIALOG_DATA) private datas:any , private service:UserService){}
ngOnInit(): void {
 this.Roomdata()
}
room:any

Roomdata(){
this.service.viewRoom(this.datas.resortId,this.datas.roomId).subscribe((res:any)=>{
  this.room = res
})
}

}
