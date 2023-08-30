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

re_email = ''
otp:any
email = ''
success:boolean = false


ngOnInit(): void {
  this.activeRoute.queryParams.subscribe(params=>{
    this.otp  = JSON.parse(params['otp']);
    this.email  = JSON.parse(params['email']);
this.re_email= JSON.parse(params['re_email'])

  })
}


onSubmit(){
 const otp = Number(this.otpData.value.otp)
  console.log(this.otp);
  console.log(this.re_email);
  console.log(otp);
  
  if(!this.email && this.re_email!==null){
    if(otp===this.otp){

      this.service.userVerify(this.re_email).subscribe((res:any)=>{
       console.log(res.message);
       this.success=true
    
       
       this.route.navigate(['/home'])
       
      })
     
     
    }else{
      Swal.fire({
        title: 'Error!',
        text: "Incorrect otp",
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }else{

    if(otp===this.otp){

      this.service.forgetOtp(this.email).subscribe((response:any)=>{
        if(response){
          const navigationExtras = {
            queryParams: {
              email:JSON.stringify(this.email)
            },
          }
    
    this.route.navigate(['/setpassword'],navigationExtras)
        }
       
  
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
  


  
}

NavigateHome(){


  this.route.navigate(["/home"]);
  
}


}


