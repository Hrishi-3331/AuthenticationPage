import * as actions from '../actions/actionTypes'

export default function UserReducer(state=[], action){
    switch(action.type){
        case actions.CREATE_USER:
            return([...state, {...action.user}]);

        default:
            return state;
    }
}