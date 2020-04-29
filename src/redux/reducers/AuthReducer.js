import * as actions from '../actions/actionTypes'

export default function AuthReducer(state={}, action){
    switch(action.type){
        case actions.LOGIN_USER:
            return({ currentuser : action.user.username, authenticated : true});

        case actions.SIGN_OUT:
            return({currentuser : "", authenticated : false});

        default:
            return state;
    }
}