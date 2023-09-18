import { Component ,ElementRef,OnInit, ViewChild ,AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import  {Socket} from "ngx-socket-io"
@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit ,AfterViewChecked  {
constructor(private activatedRoute:ActivatedRoute,private service:UserService,private toaster:ToastrService ,private socket:Socket){}
  ngAfterViewChecked(): void {
   this.scrollToBottom()
  }
  
 

adminId:any
chatdata:any
userId:any

ngOnInit(): void {
  this.activatedRoute.queryParamMap.subscribe((param)=>{
    this.adminId = param.get("adminId")
     this.userId = param.get("userId")
  
  })
  

  this.getChatData()
  this.socket.emit('setup',this.userId)
  this.socket.on('message recieved',(newMessage:any)=>{   

      if(!this.chatdata){
        this.chatdata = []
      }
   
    this.chatdata.push(newMessage);
  
})

}



getChatData(){
  this.service.viewChat(this.adminId).subscribe((res:any)=>{
   this.toaster.info("history recovered")
   this.socket.emit('join',res.cId)
   this.chatdata = res.data
   this.userId = res.id

  })
}


FormData = new FormGroup({
  text:new FormControl("",[Validators.required])
})

submit(){
  const text = String(this.FormData.value.text)
  const data = {text:text,id:this.adminId}
  this.service.submitMsg(data).subscribe((res:any)=>{
   this.toaster.success("message sent")
   this.socket.emit('chatMessage',res.data)
   this.chatdata.push(res.data)
   this.FormData.reset()
   
  })
}


  @ViewChild('messagesContainer')
  private messagesContainer!: ElementRef;


scrollToBottom() {
  this.toaster.success("scroll")
  this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
}




}
