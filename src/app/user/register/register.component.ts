import { Component ,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';


function validatePhoneNumberLength(control: FormControl): { [key: string]: boolean } | null {
  const value:string = control.value+"";
  
  
  if (value && value.length !== 10) {
    return { 'invalidPhoneNumberLength': true };
  }
  
  return null;
}




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
 
  

title = 'Ecovibe'
loginForm = new FormGroup({
  userName:new FormControl('',[Validators.required]),
  mobile:new FormControl('',[Validators.required,validatePhoneNumberLength]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required]),
  re_password:new FormControl('',[Validators.required])
  
})

constructor(private http:HttpClient,private route:Router ,private service:UserService){}
onSubmit(){
   
  if(this.loginForm.valid){
  if(this.loginForm.value.password===this.loginForm.value.re_password){
    const formData = this.loginForm.value
    
    this.service.userRegister(formData).subscribe((res:any)=>{
      const navigationExtras = {
        queryParams: {
          otp: JSON.stringify(res.otp),
          re_email:JSON.stringify(this.loginForm.value.email)

        },
      };
    
   this.route.navigate(['/otp'],navigationExtras)
      
    },(err)=>{
   console.log("error",err);
    })
}} 
 }




}
