import { Component ,OnInit} from '@angular/core';

import { FormControl,FormGroup ,Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute, Router , } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit  {

constructor( private service:UserService , private route : Router ,private activeRoute:ActivatedRoute){}
otpData = new FormGroup({
  otp:new FormControl("",[Validators.maxLength(6),Validators.minLength(6)])
})

token = ''
otp:any
success:boolean = false


ngOnInit(): void {
  this.activeRoute.queryParams.subscribe(params=>{
    this.otp  = JSON.parse(params['otp']);
this.token= JSON.parse(params['token'])

  })
}


onSubmit(){
 const otp = Number(this.otpData.value.otp)
  console.log(this.otp);
  console.log(this.token);
  console.log(otp);
  
  
  
if(otp===this.otp){

  this.service.userVerify(this.token).subscribe((res:any)=>{
   console.log(res.message);
   this.success=true

   localStorage.setItem("token",this.token)
   
  })
 
 
}else{
  Swal.fire({
    title: 'Error!',
    text: "Incorrect otp",
    icon: 'error',
    confirmButtonText: 'OK'
  })
}

  
}

NavigateHome(){


  this.route.navigate(["/home"]);
  
}


}


