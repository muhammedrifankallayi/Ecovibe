import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const serverURL = 'http://localhost:4000'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

token = localStorage.getItem("token")

 userVerify(data:any){
    return this.http.post('http://localhost:4000/verify',{data})
  }


  saveReq(data:any){
    const token = this.token
    return this.http.post('http://localhost:4000/hoster-req',{data,token})
  }


  forgetOtp(email:any){
    return  this.http.get(`${serverURL}/forget-otp?email=${email}`)
  }

  newPassword(email:string,password:any){
    return  this.http.post(`${serverURL}/newpassword`,{email,password})
  }

  profileImg(file:any){
    return this.http.post(`${serverURL}/file`,file)
  }

  getResorts(){
    return this.http.get(`${serverURL}/getResorts`)
  }

  getSingleView(id:string){
 return  this.http.get(`${serverURL}/getSingleView?id=${id}`)
  }

  availability(data:any){
    return this.http.post(`${serverURL}/availability`,{data})
  }

getRoomData(resort_id:string,room_id:string){
  return this.http.get(`${serverURL}/getroom?resort_id=${resort_id}&room_id=${room_id}`)
}



}
