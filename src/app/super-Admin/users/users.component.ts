import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { SuperAdminService } from 'src/app/services/superAdmin/super-admin.service';
import { ToastrService } from 'ngx-toastr';
import { Store ,select } from '@ngrx/store';
import { loaduser } from '../state/user/user.actions'; 

import { selectUsers,selectloaded ,selectloading } from '../state/user/user.selecter';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit  {
 ngOnInit(): void {
  this.store.dispatch(loaduser())

  this.getUsers()
 }
constructor(private service:SuperAdminService, private toaster:ToastrService ,private store:Store ,private http:HttpClient){}


  values = true
  users$:any|null

  
  loaded$=this.store.select(selectloaded)
  loading$=this.store.select(selectloading)

  sidebarToggled(value: boolean):any{
     this.values=value
    
  }


  getUsers(){
    this.store.pipe(select(selectUsers)).subscribe((res:any)=>{
      this.users$ = res.data
    this.toaster.success("success")
    console.log(res);
    
      
    })
  }



  action(data:string,id:string){

  

     if(data){
      Swal.fire({
        title: 'Success!',
        text: data+' successfull!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((res)=>{
        if(res.isConfirmed){
       this.service.blockUser(id).subscribe((res)=>{
        this.store.dispatch(loaduser())
        

       })
        }
      })
     }
  }
 
}
