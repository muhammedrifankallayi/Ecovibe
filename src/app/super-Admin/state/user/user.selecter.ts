import { createFeatureSelector,createSelector } from "@ngrx/store";


import { userState,subcriptionState } from "../model/user.model";

export const selectUserState = createFeatureSelector<userState>('users');
export const selectSubscriptionState = createFeatureSelector<subcriptionState>("subscription");


export const selectUsers=createSelector(selectUserState,state=>state.users)
export const selectloading=createSelector(selectUserState,state=>state.loading)
export const selectloaded=createSelector(selectUserState,state=>state.loaded)

export const selectSubscription = createSelector(selectSubscriptionState,state=>state.subscription);
export const selectSubscriptionLoading = createSelector(selectSubscriptionState,state=>state.loading);
export const selectSubscriptionLoaded = createSelector(selectSubscriptionState,state=>state.loaded);