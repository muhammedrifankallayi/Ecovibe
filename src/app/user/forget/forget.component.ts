import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

constructor(private route:Router , private service:UserService){}

FormData = new FormGroup({
  email:new FormControl("",[Validators.required,Validators.email])
})


OnSubmit(){
  const email  = this.FormData.value.email

this.service.forgetOtp(email).subscribe((res:any)=>{
  const navigationExtras = {
    queryParams:{
      email:JSON.stringify(email),
      otp : JSON.stringify(res.otp)
    }
  }
if(email){
  this.route.navigate(["/otp"],navigationExtras)
}
})

 

}




}
