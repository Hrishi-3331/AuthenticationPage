import * as actions from "./actionTypes";

export function createUser(user){
    return {type:actions.CREATE_USER, user}
}

export function loginUser(user){
    return{type:actions.LOGIN_USER, user}
}

export function logoutUser(user){
    return{type:actions.SIGN_OUT}
}