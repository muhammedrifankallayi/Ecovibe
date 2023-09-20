import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{

constructor(private service:UserService , private toaster:ToastrService , private router:Router){}

ngOnInit(): void {
  
}

showNewPass:boolean = false


NewPassForm = new FormGroup({
  Newpassword:new FormControl("",[Validators.required]),
  Confirmpassword:new FormControl("",[Validators.required])
})

CurrPassForm= new FormGroup({
  currentpassword: new FormControl("",[Validators.required])
})



currpassCheck(){
  if(this.CurrPassForm.invalid){
    this.toaster.error("Form not valid")
    return
  }
  const data = this.CurrPassForm.value
  this.service.checkPassword(data).subscribe((res:any)=>{
    this.toaster.success(res.message)
    this.showNewPass = true
  },(err:any)=>{
    this.toaster.error(err.error.message)
  })
}


updatePassword(){
  if(this.NewPassForm.invalid){
    this.toaster.error("Form not valid")
    return
  }


if(this.NewPassForm.value.Confirmpassword === this.NewPassForm.value.Newpassword){
  const data = this.NewPassForm.value
  this.service.updatePassword(data).subscribe((res:any)=>{
    this.toaster.success(res.message)
this.router.navigate(['/settings'])
  },(err:any)=>{
    this.toaster.error("failed")
  })
}else{
  this.toaster.error("passwords not matcning")
}


}


}
