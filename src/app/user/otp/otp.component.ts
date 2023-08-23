import { Component } from '@angular/core';

import { FormControl,FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {


otpData = new FormGroup({
  otp:new FormControl("",[Validators.maxLength(6),Validators.minLength(6)])
})



onSubmit(){

  console.log(

    this.otpData.value


  );
  
}

}


