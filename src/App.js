import React,{useReducer} from 'react';
import axios from 'axios'
import {Provider} from 'react-redux'

import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import PostData from './components/postData';
import Timer from './components/timer';
import ReduxCounter from './components/ReduxCounter';
import store from './components/redux';

export const DataContext=React.createContext()

const defaultpost={id:0,postData:''}

const reducer=(state,action)=>{
  switch(action.type){
    case 'FETCH_SUCCES':
      return {
        id:0,
        postData:action.payload
      }
case 'FETCH_FAILURE':
  return {
    id:state,
    postData:''
  }
    default:
       return defaultpost
  }
}



function App() {
  const [post,dispatch]=useReducer(reducer,defaultpost)
  
  return (
  <Provider store={store}>
    <div className="App">
      <DataContext.Provider value={{postId:post.id,dispatch:dispatch,postData:post.postData}}>
      <Counter/>
      <Timer/>
      <ReduxCounter/>
      <PostData/>
      </DataContext.Provider>
    </div>
    </Provider>
  );
}

export default App;
