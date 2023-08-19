import { createFeatureSelector,createSelector } from "@ngrx/store";


import { User ,userState } from "../model/user.model";

export const selectUserState = createFeatureSelector<userState>('users');


export const selectUsers=createSelector(selectUserState,state=>state.users)
export const selectloading=createSelector(selectUserState,state=>state.loading)
export const selectloaded=createSelector(selectUserState,state=>state.loaded)