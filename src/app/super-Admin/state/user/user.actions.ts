import { createAction,createReducer,props } from "@ngrx/store";

import { User } from "../model/user.model";



export const  loaduser = createAction('userload')
export const loadusersuccess=createAction("loadusersuccess",props<{users: User[]}>())
export const loaduserfailure=createAction("loaduserfailure",props<{error:any}>())