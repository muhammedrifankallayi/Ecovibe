import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  ngOnInit(): void {
   
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

  Swal.fire({
    title: 'Error!',
    text: err.error.message,
    icon: 'error',
    confirmButtonText: 'OK'
  });
  console.log(err);
  
console.log('Error',err.error.message);

})
  }




  
    register(){
   this.route.navigate(['/register'])
    }
}
