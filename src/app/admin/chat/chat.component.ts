import { Component , ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Socket } from "ngx-socket-io";


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit {
constructor(private service:AdminService , private activatedRoute:ActivatedRoute ,public toaster:ToastrService , private socket:Socket){}

@ViewChild('chatContainer')
chatContainer!: ElementRef;


userId:any
ngOnInit(): void {
  this.activatedRoute.queryParamMap.subscribe((param)=>{
  this.userId = param.get("userId")
  })
  this.getChatdata()
  this.socket.on("message recieved",(message:any)=>{
    console.log(message);
    
    if(!this.chatdata){
      this.chatdata=[]
    }
    this.chatdata.push(message)
    setTimeout(() => {
      this.scrollToBottom()
    } );
  })
 
}

chatdata:any
adminId:any
getChatdata(){
  this.service.getChatData(this.userId).subscribe((res:any)=>{
    this.chatdata = res.data
    this.adminId = res.id
    this.socket.emit('setup',this.adminId) 
    this.socket.emit('join',res.cId) 
    console.log(res);
    this.toaster.success("history recored")
    setTimeout(()=>{
      this.scrollToBottom()
    })
  })
}


FormData = new FormGroup({
  text:new FormControl("",[Validators.required])
})

submit(){
  const text = this.FormData.value.text
  const data = {text:text,user_id:this.userId}
  this.service.submitChatMsg(data).subscribe((res:any)=>{
    this.socket.emit("chatMessage",res.data)
    this.chatdata.push(res.data)
    this.FormData.reset()
    this.toaster.success("sent")
    setTimeout(() => {
      this.scrollToBottom()
    } );
  },(err:any)=>{
    this.toaster.error(err.error.message)
  })
}


scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight)
}

}
