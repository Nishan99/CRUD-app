import {SAVE_USER_DATA, USER_LOGIN_STATUS,USER_LOGOUT,ADMIN_LOGIN_STATUS,USER_LOGOUT_STATUS, ADMIN_LOGOUT_STATUS} from '../types'

export const saveData=(payload)=>{
  return{
    type:SAVE_USER_DATA,
    payload
  }
}

export const userLogin=(payload)=>{
  return{
    type:USER_LOGIN_STATUS,
    payload
  }
}
export const adminlogin=(payload)=>{
  return{
    type:ADMIN_LOGIN_STATUS,
    payload
  }
}

export const adminLogout=(payload)=>{
  return{
    type:ADMIN_LOGOUT_STATUS,
    payload
   
  }
}
export const userLogout=(payload)=>{
  return{
    type:USER_LOGOUT,
    payload
   
  }
}
export const userLogoutStatus=(payload)=>{
  return{
    type:USER_LOGOUT_STATUS,
    payload
   
  }
}