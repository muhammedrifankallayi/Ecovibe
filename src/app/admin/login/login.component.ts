import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  erroMessage: string='';
 
  constructor(private route:Router,private service:AdminService){}


  formData = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  show(){
   console.log( this.formData.value );
   
   }

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
      this.erroMessage ="Sorry ,"+ err;
    })
  }

}
