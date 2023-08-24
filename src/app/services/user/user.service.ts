import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }



 userVerify(data:any){
    return this.http.post('http://localhost:4000/verify',{data})
  }




}
