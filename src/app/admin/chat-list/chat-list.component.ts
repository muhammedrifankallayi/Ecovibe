import { Component , OnInit  } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import {Socket} from "ngx-socket-io"

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  constructor(private service:AdminService , private router:Router , private socket:Socket){}

  chatList:any
ngOnInit(): void {
  this.getChatList()
}

getChatList(){
  this.service.getChatList().subscribe((res:any)=>{
    this.chatList = res.list
    
    console.log(res.list);
    
  })
}

singleView(id:string){
  const navigationExtras:NavigationExtras = {
    queryParams:{
      userId:id
    }
  }
 
  this.router.navigate(['admin/chat'],navigationExtras)
}





}
