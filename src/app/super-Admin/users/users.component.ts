import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {
 ngOnInit(): void {
   this.getUser()
 }
constructor(private http:HttpClient){}


  values = true
  users$:any|null

  sidebarToggled(value: boolean):any{
     this.values=value
    
  }

  getUser(){
    this.http.get("http://localhost:4000/superAdmin/getUser").subscribe((res:any)=>{
    this.users$ = res.data
    console.log(res.data);
    
    },(err)=>{
      console.log(err);
      
    })
  }

}
