import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    this.http.get('http://localhost:4000/userLogin', { headers }).subscribe((res:any)=>{
      if(res.Authorization===true){
        this.route.navigate(['/home'])
      }else{
        console.log("Not authenticated");
        
        this.route.navigate(['/login'])
      }
    });
  }
  constructor(private route:Router , private http:HttpClient){}
title = 'Ecovibe'
  loginData = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  onSubmit(){
    const FormData = this.loginData.value
   
    
this.http.post("http://localhost:4000/userLogin",{FormData}).subscribe((res:any)=>{
 localStorage.setItem("token",res.token)
 
 
this.route.navigate(['/home'])
  
},(err)=>{
console.log('Error',err.message);

})
  }


show(){
  console.log(this.loginData.value);
  
}

  
    register(){
   this.route.navigate(['/register'])
    }
}
