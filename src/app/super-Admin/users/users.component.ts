import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { SuperAdminService } from 'src/app/services/superAdmin/super-admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {
 ngOnInit(): void {
   this.getUser()
 }
constructor(private http:HttpClient ,private service:SuperAdminService){}


  values = true
  users$:any|null

  sidebarToggled(value: boolean):any{
     this.values=value
    
  }

  getUser(){
   this.service.getUserData().subscribe((res:any)=>{
    this.users$ = res.data
    console.log(res.data);
    
    },(err)=>{
      console.log(err);
      
    })
  }

}
