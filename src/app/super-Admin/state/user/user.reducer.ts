import { createReducer,on } from "@ngrx/store";

import * as userActions from '../user/user.actions'
import { userState } from "../model/user.model";



export const initialState: userState = {
    users: [],
    loading: false,
    loaded: false,
    error: null,
  };

  export const userReducer = createReducer(
    initialState,
    on(userActions.loaduser,(state)=>({
        ...state,
        loading:true
    })),

    on(userActions.loadusersuccess, (state, { users }) => ({
        ...state,
        loading: false,
        loaded: true,
        users,
      })),

    on(userActions.loaduserfailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
      }))

  )