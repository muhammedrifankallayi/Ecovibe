import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { Validators ,FormControl ,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { SuperAdminService } from 'src/app/services/superAdmin/super-admin.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private http:HttpClient, private route:Router ,private service:SuperAdminService){}

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

 this.service.login(data)
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



