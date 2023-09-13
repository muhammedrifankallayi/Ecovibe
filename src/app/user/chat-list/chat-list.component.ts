import { Component ,OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(private router:Router ,private service:UserService,private toaster:ToastrService  ,private socket:Socket){}

  userId:any
  adminId:any
  
  
  ngOnInit(): void {
    this.getChatlist()
  

  }
  
  chatList:any
  getChatlist(){
    this.service.userChatList().subscribe((res:any)=>{
      this.chatList = res.list
    
      this.toaster.success("chatList")
      console.log(res.list);
      
    })
  }
  
  
  
  singleChat(user_id:string,admin_id:string){
  
  const navigationExtras:NavigationExtras = {
    queryParams:{
      userId:user_id,
      adminId:admin_id
    }
  }
 
  this.router.navigate(['/chatpage'],navigationExtras)
  
  
  
  }


}
