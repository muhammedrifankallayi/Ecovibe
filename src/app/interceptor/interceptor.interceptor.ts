import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

const token = localStorage.getItem("token");
const admintoken = localStorage.getItem("admintoken");
const superAdminToken = localStorage.getItem("superadmintoken");

if(token){
  const newReq = request.clone({
    headers:request.headers.set('Authorisation','Bearer'+token )
  })

  return next.handle(newReq);


}else if (admintoken) {
  
const newReq = request.clone({
  headers:request.headers.set('Authorisation','Bearer'+admintoken )

 
})

return next.handle(newReq)


}else if(superAdminToken){
  const newReq = request.clone({
   headers:request.headers.set('Authorisation','Bearer'+superAdminToken )
  })


  return next.handle(newReq)
}

return next.handle(request);



  }
}
