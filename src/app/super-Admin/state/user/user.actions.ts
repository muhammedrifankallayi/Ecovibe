import { createAction,createReducer,props } from "@ngrx/store";

import { User ,subscription } from "../model/user.model";

// user data fetching....

export const  loaduser = createAction('userload')
export const loadusersuccess=createAction("loadusersuccess",props<{users: User[]}>())
export const loaduserfailure=createAction("loaduserfailure",props<{error:any}>())

// subcription Data fetching ...

export const loadsubscription = createAction("subscriLoad")
export const loadsubscriptionSuccess  = createAction("loadsubscriptionSuccess",props<{subscription:subscription[]}>())
export const loadsubscriptionFailure = createAction("loadsubscriptionFailure",props<{error:any}>())

