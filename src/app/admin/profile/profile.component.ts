import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ngOnInit(): void {
    this.loadProfile()
    
  }
constructor(private http:HttpClient ,private service:AdminService){}

data:any
isEdit:boolean=false
loadProfile(){

 
  
 this.service.adminProfile().subscribe(
    (res: any) => {
    
      this.data = res.data;
    },
    (error) => {
      console.error(error);
    }
  );
  
}

values:boolean = true;
sidebarToggled(value: boolean):void{
  this.values=value
 
}  handleSidebarToggle(isCollapsed: boolean) {
 
 this.values = isCollapsed
}


FormData = new FormGroup({
  name:new FormControl("",[Validators.required]),
  email:new FormControl("",[Validators.required,Validators.email]),
  mobile:new FormControl("",[Validators.required,Validators.maxLength(10)])
})

edit(){
this.isEdit=true
this.FormData.patchValue({
  name:this.data.name,
  mobile:this.data.mobile,
  email:this.data.email
})
}




saveProfile(){
const data = this.FormData.value

  this.service.saveProfile(data).subscribe((res)=>{
    Swal.fire({
      timer:1000,
      title:"Saved successfully",
      icon:"success"
    })
    this.data.name = data.name
    this.data.email = data.email
    this.data.mobile = data.mobile
  },(err:any)=>{
    Swal.fire({
      icon:"error",
      title:"sorry something wrong",
      text:err.error.message,
    confirmButtonText:"OK"
    })
  })
}


cancel(){
  this.isEdit=false
}

}
