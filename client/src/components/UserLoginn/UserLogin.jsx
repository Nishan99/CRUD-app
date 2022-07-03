import React, { useState } from "react";
import "./UserLogin.css";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useDispatch,useSelector} from "react-redux";
import {saveData, userLogin} from '../../Redux/actions/allActions'


const UserLogin = () => {
  
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const loginUser=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/profile/login',{
      username:loginDetails.username  
    })
    .then(res=>{
      if(res.data.failure){
        alert(res.data.failure)
      }else{
        if(res.data.email === loginDetails.username && res.data.password === loginDetails.password){
          dispatch(saveData(res.data))
          dispatch(userLogin(true))
          
          navigate(`/user/${res.data.id}`)
        }else{
          alert('check login details')
          
        }
      }
    })
    .catch(err=>{alert(err.data)})
    
  }

  return (
    <div className="user-login">
      <div className="form-login-user-container">
      <h3>User Login</h3>

      
      <form onSubmit={loginUser}>
        <div className='userlogin-input-grp'>
          <p>username:</p>
          <input
            required
            type="text"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, username: e.target.value })
            }
          />
        </div>

        <div className="userlogin-input-grp">
          <p>Password:</p>
          <input
            required
            type="password"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
        </div>

        <input type="submit" value="Login" className="userlogin-btn-login" />
      </form>
      {/* <img src={layerImg} alt='lower-img' /> */}
      </div>
    </div>
  );
};

export default UserLogin;
