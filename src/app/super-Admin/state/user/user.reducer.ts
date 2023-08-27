import { createReducer,on } from "@ngrx/store";

import * as userActions from '../user/user.actions'
import { userState ,subcriptionState} from "../model/user.model";



export const initialState: userState = {
    users: [],
    loading: false,
    loaded: false,
    error: null,
  };

  export const subscriptionInitialState:subcriptionState = {

    subscription:[],
    loading:false,
    loaded:false,
    error:null

  }


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


//   subscription reducer

  export const subscriptionReducer = createReducer(

    subscriptionInitialState,
    on(userActions.loadsubscription,(state)=>({
      ...state,
      loading:true
    })),
    on(userActions.loadsubscriptionSuccess,(state,{subscription})=>(
      {
        ...state,loaded:false,loading:true,subscription
      }
    )),
    on(userActions.loadsubscriptionFailure,(state,{error})=>({
     ...state,
     loading:false,
     error
    }))

  )