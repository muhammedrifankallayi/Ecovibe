import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  erroMessage: string='';
 
  constructor(private route:Router,private service:AdminService ,private toaster:ToastrService){}


  formData = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  

  Onsubmit(){
    console.log("working");
    
    const data = this.formData.value

this.service.login(data).subscribe((res:any)=>{
      console.log(res.message);
 
      localStorage.setItem("adminToken",res.token)

      this.route.navigate(['admin/dashboard'])
      
    },
    (err) => {
      console.log('Error', err);
      this.erroMessage ="Sorry ,"+ err.error.message;
      this.toaster.error(" Login failed")
      Swal.fire({
        title:"Login Failed",
        text:err.error.message,
        icon:"error",
        confirmButtonText:'Purchase',
      showCancelButton:true
      }).then((result)=>{
        if(result.isConfirmed){

          console.log(err.error);
          
        const navigationExtras:NavigationExtras ={
          queryParams:{
            id:err.error.id
          }
        }

          this.route.navigate(['/subscription'],navigationExtras)
        }
      })
    })
  }

}
