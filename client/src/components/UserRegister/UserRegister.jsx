import React,{useState} from "react";
import "./UserRegister.css";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const UserRegister = () => {
  const [userDetials, setUserDetails] = useState({firstName:'',lastName:'',age:null,email:'',password:'',phone:'',address:''})
const navigate = useNavigate()
  const registerUser=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/profile',{
      firstName:userDetials.firstName,
      lastName:userDetials.lastName,
      age:userDetials.age,
      email:userDetials.email,
      password:userDetials.password,
      phone:userDetials.phone,
      address:userDetials.address
    }).then(res=>{
      if(res.data.error){
        alert(res.data.error)
      }if(res.data.success){
        alert('user registered sucessfully')
        setUserDetails({firstName:'',lastName:'',age:null,email:'',password:'',phone:'',address:''})
        navigate('/login')
      }
    })
  }
  return (
    <div className="user-register">
     
      <div className="user-register-right form-login-user-container ">
      <h3>User Register</h3>
        <form className="register-form" onSubmit={registerUser}>
          <div className="input-combine-group">
            <div className="register-input-group grp-reg-1 userlogin-input-grp">
              <p>First Name</p>
              <input value={userDetials.firstName} onChange={e=>setUserDetails({...userDetials,firstName:e.target.value})} required type="text" />
            </div>
            <div className="register-input-group grp-reg-1 userlogin-input-grp">
              <p>Last Name</p>
              <input value={userDetials.lastName} onChange={e=>setUserDetails({...userDetials,lastName:e.target.value})} required type="text" />
            </div>
            </div>
            <div className="input-combine-group">

            <div className="register-input-group grp-reg-1 userlogin-input-grp">
              <p>Age</p>
              <input value={userDetials.age} onChange={e=>setUserDetails({...userDetials,age:e.target.value})} required type="number" />
            </div>
            <div className="register-input-group grp-reg-1 userlogin-input-grp">
              <p>E-mail</p>
              <input value={userDetials.email} onChange={e=>setUserDetails({...userDetials,email:e.target.value})} required type="email" />
            </div>
            </div>

            <div className="input-combine-group">

            <div className="register-input-group grp-reg-1 userlogin-input-grp">
              <p>Password </p>
              <input value={userDetials.password} onChange={e=>setUserDetails({...userDetials,password:e.target.value})} required type="password" />
            </div>
            <div className="register-input-group grp-reg-1 userlogin-input-grp">
              <p>Phone</p>
              <input value={userDetials.phone} onChange={e=>setUserDetails({...userDetials,phone:e.target.value})} required type="text" />
            </div>
            </div>
            <div className="register-input-group grp-reg-1 userlogin-input-grp">
              <p>Address</p>
              <input value={userDetials.address} onChange={e=>setUserDetails({...userDetials,address:e.target.value})} required type="text" />
            </div>
          <input type="submit" value='register' className="userregister-btn-login"/>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
