import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

function loadFromLocalStorage(){
    try{
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    }catch(e){
      console.log(e);
      return undefined;
    }
}

let PersistedState = loadFromLocalStorage();

export default function configureStore(initialState){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer,
        {...initialState, ...PersistedState}, 
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
        );
}