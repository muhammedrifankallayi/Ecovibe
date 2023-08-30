import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent  implements OnInit {

email = ''
otp = ''

  ngOnInit(): void {
    this.active.queryParams.subscribe(params=>{
this.email = JSON.parse(params['email']);
this.otp = JSON.parse(params['otp']);
    })
  }
constructor(private route:Router, private active:ActivatedRoute , private service:UserService){}

  FormData = new FormGroup({
    password:new FormControl("",[Validators.required,Validators.minLength(8)]),
    re_password:new FormControl("",[Validators.required,Validators.minLength(8)])
  })


  OnSubmit(){
    const Data = this.FormData.value
    if(Data.password===Data.re_password){

      const password = Data.password

      this.service.newPassword(this.email,password).subscribe((res)=>{
        this.route.navigate(['/login'])
      })
    

    }else{
      Swal.fire({
        title:"Password not same",
        icon:"error",
        confirmButtonText:"OK"
      })
    }
  }


}
