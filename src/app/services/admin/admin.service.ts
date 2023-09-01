import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Restaurant ,Amenties} from 'src/app/admin/state/types/admintype';


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







}
