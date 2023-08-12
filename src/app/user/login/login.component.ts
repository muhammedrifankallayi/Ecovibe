import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router , private http:HttpClient){}

  loginData = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  onSubmit(){
    const FormData = this.loginData.value
this.http.post("http://localhost:4200/user",{FormData}).subscribe((res)=>{
  console.log(res);
  
},(err)=>{
console.log('Error',err);

})
  }

  
    register(){
   this.route.navigate(['/register'])
    }
}
