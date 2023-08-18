import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  erroMessage: string='';
 
  constructor(private route:Router,private http:HttpClient){}


  formData = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  show(){
   console.log( this.formData.value );
   
   }

  Onsubmit(){
    console.log("working");
    
    const data = this.formData.value
var erroMessage:any;
    this.http.post("http://localhost:4000/admin/login",{data}).pipe(catchError((error:HttpErrorResponse)=>{
       this.erroMessage  = "an error occured";
      if(error.error instanceof ErrorEvent){
        erroMessage = error.error.message
      }else{
        erroMessage = error.error.message || 'server error'
      }
      return throwError(erroMessage);
    })).subscribe((res:any)=>{
      console.log(res.message);

      this.route.navigate(['admin/dashboard'])
      
    },
    (err) => {
      console.log('Error', err);
      this.erroMessage ="Sorry ,"+ err;
    })
  }

}
