import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { Validators ,FormControl ,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http:HttpClient, private route:Router){}

  // error msg shows

errMessage=''

ngOnInit(): void {
            
} 

FormData = new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password : new FormControl('',[Validators.required,Validators.minLength(5)])
})

OnSubmit() {
  console.log(this.FormData.value);

  const data = this.FormData.value;

  this.http.post("http://localhost:4000/superAdmin/login", { data })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = error.error.message || 'Server error';
        }
        return throwError(errorMessage);
      })
    )
    .subscribe(
      (res: any) => {
        console.log(res.message);
        
        this.route.navigate(['superAdmin/dashboard']);
      },
      (err) => {
        console.log('Error', err);
        this.errMessage ="Sorry ,"+ err;
      }
    );
}
}



