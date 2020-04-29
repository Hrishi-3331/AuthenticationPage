import {combineReducers} from 'redux'
import users from './UserReducer'
import auth from './AuthReducer'

const rootReducer = combineReducers({
    users,
    auth
});

export default rootReducer;