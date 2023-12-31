import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/super-Admin/state/model/user.model';

import { paydata, question } from 'src/app/user/state/userType/user.type';
import { environment } from 'src/environments/environment.development';

const serverURL = environment.userApiUrl

@Injectable({
  providedIn: 'root'
})
export class UserService {

public isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http : HttpClient) { }

token = localStorage.getItem("token")

 userVerify(data:any){
    return this.http.post(`${serverURL}/verify`,{data})
  }


  saveReq(data:any){
   
    return this.http.post(`${serverURL}/hoster-req`,{data},{withCredentials:true})
  }


  forgetOtp(email:any){
    return  this.http.get(`${serverURL}/forget-otp?email=${email}`)
  }


  userLogin(FormData:any){
    console.log('koi');
    
    return this.http.post(`${serverURL}/userLogin`,{FormData})
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

getBookings(){
  return this.http.get(`${serverURL}/getuserbookings`)
}

viewRoom(resortId:string,roomId:string){
  return this.http.get(`${serverURL}/viewroom?roomId=${roomId}&resortId=${resortId}`)
}

CancelBooking(id:string){
  return this.http.patch(`${serverURL}/cancelbooking`,{id})
}

dropQuestions(data:question){
  return this.http.post(`${serverURL}/dropquestion`,{data})
}


checkAvailableOnDate(data:any){
  return this.http.post(`${serverURL}/getavailableondate`,{data})
}

categoryWise(category:string){
return this.http.get(`${serverURL}/categorywise?category=${category}`)
}



userRegister(formdata:any){
return this.http.post(`${serverURL}/userRegister`,formdata)
}


}

export interface msg{
  
  text:string
  id:string
}


