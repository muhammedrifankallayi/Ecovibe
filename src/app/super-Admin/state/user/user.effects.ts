import  {Injectable} from "@angular/core"
import { createEffect,Actions,ofType } from "@ngrx/effects";
import *as UserAction from "./user.actions";
import { catchError, map, merge, mergeMap, of, switchMap } from "rxjs";
import { SuperAdminService } from "src/app/services/superAdmin/super-admin.service";



@Injectable()
export class userEffects{
constructor(private actions$:Actions,private service:SuperAdminService){}

//  userdata fetching from backed 

loaduser$=createEffect(()=>{
    return this.actions$.pipe(
        ofType(UserAction.loaduser),
        mergeMap(()=>
        this.service.getUserData().pipe(
            map(users=>(UserAction.loadusersuccess({users:users}))),
            catchError((error)=>of(UserAction.loaduserfailure({error})))
        ))
        
    )
})

// subscription data fetching from backend 

subscriLoad$ = createEffect(()=>{
    return this.actions$.pipe(
        ofType(UserAction.loadsubscription), mergeMap(()=>
        this.service.getSubscriptions().pipe(
            map(subscription=>(UserAction.loadsubscriptionSuccess({subscription:subscription}))),
            catchError((error)=>of(UserAction.loadsubscriptionFailure({error})))
        )  
        
        )
    )
})

}