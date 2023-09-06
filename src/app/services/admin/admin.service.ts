import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Restaurant ,Amenties ,roomType} from 'src/app/admin/state/types/admintype';



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


getRestaurantData(){
  return this.http.get<Restaurant[]>(`${serverURL}/getrestaurants`,{withCredentials:true})
}

facilityRestaurant(data:any){
  return this.http.post(`${serverURL}/restaurantdata`,{data},{withCredentials:true})
}

getSurrounding(){
  return this.http.get(`${serverURL}/getsurroundings`,{withCredentials:true})
}

facilitySurroundings(data:any){
return this.http.post(`${serverURL}/surroundingdata`,{data},{withCredentials:true})
}

facilityItemsSurr(data:any){
  
return this.http.post(`${serverURL}/itemsurrdata`,{data},{withCredentials:true})

}

deleteSurroundings(data:string){
  return this.http.post(`${serverURL}/deletesurrounding`,{data},{withCredentials:true})
}


deleteRestaurant(data:string){
  return this.http.patch(`${serverURL}/deleterestaurant`,{data},{withCredentials:true})
}

getAmenties(){
  return this.http.get(`${serverURL}/getamenties`,{withCredentials:true})
}


addAmenties(data:any){
  return this.http.put(`${serverURL}/amemtiesdata`,{data},{withCredentials:true});
}

deleteAmenties(data:string){
  return this.http.patch(`${serverURL}/deleteamenties`,{data},{withCredentials:true})
}

 uploadImage(files: any) {
 
  console.log(files);
  

  return this.http.post<any>(`${serverURL}/submitimages`,files,{withCredentials:true});
}


getimages(){
  return this.http.get(`${serverURL}/getimages`,{withCredentials:true})
}

addToMainImage(index:number){
  return this.http.patch(`${serverURL}/addToMainImg`,{index},{withCredentials:true})
}

addAsBanner(index:number){
  return this.http.patch(`${serverURL}/addAsBanner`,{index},{withCredentials:true})
}

deleteImg(index:number){
  return this.http.patch(`${serverURL}/deleteImg`,{index},{withCredentials:true})
}

submitRoom(data:any):Observable<roomType[]>{
  return this.http.post<roomType[]>(`${serverURL}/roomsubmit`,{data},{withCredentials:true})
}

getRooms(){
  return this.http.get(`${serverURL}/getroomdata`,{withCredentials:true})
}







}
