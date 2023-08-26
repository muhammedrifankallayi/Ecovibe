import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { catchError, throwError ,Observable } from 'rxjs';
import { User } from 'src/app/super-Admin/state/model/user.model';

const url = "http://localhost:4000/superAdmin"
@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  constructor(private http:HttpClient) { }

// Super Admin Login 

  login(data: any) {
    return this.http.post('http://localhost:4000/superAdmin/login', { data }).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
          errorMessage = error.error.message;
        } else {
          errorMessage = error.error.message || 'Server error';
        }
        return throwError(errorMessage);
      })
    );
  }


 // user Data getting 

  getUserData():Observable<User[]>{
  
    return this.http.get<User[]>("http://localhost:4000/superAdmin/getUser")
  }

  blockUser(id:any){
    return this.http.post("http://localhost:4000/superAdmin/blockUser",{id})
  }


  getRequests(){
    return this.http.get("http://localhost:4000/superAdmin/getRequests")
  }

  approveRequest(id: string): Observable<any> {
    const url = `http://localhost:4000/superAdmin/approveRequest/${id}`;
    return this.http.patch(url, {});
  }

  rejectedReqest(id:string):Observable<any>{
    const url = `http://localhost:4000/superAdmin/rejectedRequest/${id}`;
    return this.http.patch(url, {});
  }

  



}


