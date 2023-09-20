import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/super-Admin/state/model/user.model';

import { paydata } from 'src/app/user/state/userType/user.type';

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
    return this.http.post(`${serverURL}/hoster-req`,{data},{withCredentials:true})
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

placeBooking(data:any){
  return this.http.post(`${serverURL}/placebooking`,{data},{withCredentials:true})
}

confirmBooking(data:any){
  return this.http.patch(`${serverURL}/confirmbooking`,{data},{withCredentials:true})
}

getSubscriptionData(){
  return this.http.get(`${serverURL}/getsubscription`)
}

pusrchaseSubcription(data:paydata){
  return this.http.patch(`${serverURL}/subscriptionpurchase`,{data},{withCredentials:true})
}

isAdmin(id:string){
  return this.http.get(`${serverURL}/isAdmin?id=${id}`,{withCredentials:true})
}
getNotification(){
  return this.http.get(`${serverURL}/notifications`,{withCredentials:true})
}
getNotifyLength(){
  return this.http.get(`${serverURL}/getnotificationlength`,{withCredentials:true})
}

viewChat(id:string){
  return this.http.get(`${serverURL}/chatview?id=${id}`,{withCredentials:true})
}
submitMsg(data:msg){
  return this.http.post(`${serverURL}/submitmsg`,{data},{withCredentials:true})
}


userChatList(){
  return this.http.get(`${serverURL}/userchatlist`,{withCredentials:true})
}

getProfile(){
  return this.http.get<User>(`${serverURL}/getUser`)
}

profileEdit(data:any){
  return this.http.put(`${serverURL}/editprofile`,{data},{withCredentials:true})
}




submitComment(data:any){
  return this.http.post(`${serverURL}/commentsubmit`,{data})
}

submitRating(data:any){
  return this.http.patch(`${serverURL}/submitrating`,{data})
}


addToWishList(id:string){
  return this.http.post(`${serverURL}/addtowishlist`,{id})
}
getWishList(){
  return this.http.get(`${serverURL}/getwishlist`)
}

removeWishlist(id:string){
  return this.http.patch(`${serverURL}/removefromwish`,{id})
}

checkPassword(data:any){
  return this.http.post(`${serverURL}/checkpassword`,{data})
}

updatePassword(data:any){
  return this.http.patch(`${serverURL}/updatepassword`,{data})
}



}

export interface msg{
  
  text:string
  id:string
}


