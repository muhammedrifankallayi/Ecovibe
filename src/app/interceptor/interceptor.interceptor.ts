import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private route:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


var token 
const usertoken = localStorage.getItem("token");
const admintoken = localStorage.getItem("adminToken");
const superAdminToken = localStorage.getItem("superAdminToken");
if(this.route.url.includes("/admin")){
 token = admintoken 
}else if(this.route.url.includes("/superAdmin")){
  token = superAdminToken
}else{
  token = usertoken
}




if(token){
  const newReq = request.clone({
    headers:request.headers.set( 'Authorization', 'Bearer '+token)
  })
  console.log(admintoken);
  console.log(token);
  
  

  return next.handle(newReq);


}else if (admintoken) {
  
const newReq = request.clone({
  headers:request.headers.set('Authorization','Bearer '+token )

  
 
})

return next.handle(newReq)


}else if(superAdminToken){
  const newReq = request.clone({
   headers:request.headers.set('Authorisation','Bearer '+token )
  })


  return next.handle(newReq)
}

return next.handle(request);



  }
}
