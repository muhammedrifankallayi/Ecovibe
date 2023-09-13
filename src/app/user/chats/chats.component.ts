import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
constructor(private router:Router , service:UserService){}

userId:any
adminId:any


ngOnInit(): void {
  
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
