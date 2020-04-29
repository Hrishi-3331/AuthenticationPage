import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux'

let initialState = {
  users:[
    {username:"John", password:"12345"},
    {username:"Tomy", password:"12345"},
    {username:"Jones", password:"12345"}
  ],
  auth:{
    currentuser : "", 
    authenticated : false
  }
}

function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }catch(e){
    console.log(e);
  }
}

const store = configureStore(initialState)

store.subscribe(()=>saveToLocalStorage(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
