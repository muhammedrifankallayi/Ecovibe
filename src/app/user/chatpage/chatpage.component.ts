import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.css']
})
export class ChatpageComponent implements OnInit {
constructor(private activatedRoute:ActivatedRoute,private service:UserService,private toaster:ToastrService){}
adminId:any
ngOnInit(): void {
  this.activatedRoute.queryParamMap.subscribe((param)=>{
    this.adminId = param.get("adminId")
  })

  this.getChatData()
  
}



getChatData(){
  this.service.viewChat(this.adminId).subscribe((res)=>{
   this.toaster.info("history recovered")
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
  })
}




}
