import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import {SAVE_USER_DATA, USER_LOGIN_STATUS,USER_LOGOUT,USER_LOGOUT_STATUS,ADMIN_LOGIN_STATUS,ADMIN_LOGOUT_STATUS} from '../types'

import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // store state in local storage


const initialState={
  id:'',
  firstName:'',
  lastName:'',
  age:'',
  email:'',
  password:'',
  phone:'',
  address:'',
  userloginStatus:false,
  adminLoginStatus:false
}

const UserReducer = (state=initialState,action)=>{
  switch(action.type){
    case SAVE_USER_DATA:
      return{
        ...state,
          id:action.payload.id,
          firstName:action.payload.firstName,
          lastName:action.payload.lastName,
          age:action.payload.age,
          email:action.payload.email,
          password:action.payload.password,
          phone:action.payload.phone,
          address:action.payload.address,
         

      }
    case USER_LOGOUT:
      return{
        ...state,
        id:'',
        firstName:'',
        lastName:'',
        age:'',
        email:'',
        password:'',
        phone:'',
        address:'',
      
      }
    case USER_LOGIN_STATUS:{
      return{
        ...state,
        userloginStatus:action.payload,
       
      }
    }
    case USER_LOGOUT_STATUS:{
      return{
        ...state,
        userloginStatus:action.payload,
       
      }
    }
    case ADMIN_LOGIN_STATUS:{
      return{
        ...state,
        adminLoginStatus:action.payload,
       
      }
    }
    case ADMIN_LOGOUT_STATUS:{
      return{
        ...state,
        adminLoginStatus:action.payload,
       
      }
    }
    default:
      return state
  }
}


//configuring key in localstorage
const persistConfig ={
  key:'userInfo',
  storage
}

const persistReducers = persistReducer(persistConfig,UserReducer)


const Store = configureStore({
  reducer:{
    persistReducers
  },
 
}, composeWithDevTools())

const persistor = persistStore(Store)

export default Store
export {persistor}