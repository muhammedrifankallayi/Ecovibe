import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';


const serverURL = "http://localhost:4000/admin"



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  erroMessage!: string;

  constructor(private http:HttpClient) { }

login(data:any){
 return  this.http.post("http://localhost:4000/admin/login",{data}).pipe(catchError((error:HttpErrorResponse)=>{
     this.erroMessage  = "an error occured";
      if(error.error instanceof ErrorEvent){
        this.erroMessage = error.error.message
      }else{
        this.erroMessage = error.error.message || 'server error'
      }
      return throwError(this.erroMessage);
    }))
}




getAboutData(){
  return this.http.get(`${serverURL}/getresort`,{withCredentials:true})
}

saveAboutData(data:any){
  return this.http.post(`${serverURL}/saveaboutdata`,{data},{withCredentials:true})
}



}
