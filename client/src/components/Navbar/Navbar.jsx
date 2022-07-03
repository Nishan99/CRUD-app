import React, { useState, useEffect} from "react";
import "./Navbar.css";
import { Link, useNavigate} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {userLogin,userLogoutStatus, userLogout} from '../../Redux/actions/allActions'
const Navbar = () => {
  const isUserLogin = useSelector((state) => state.persistReducers.userloginStatus);
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    
  },[])

  const LogoutUser=()=>{
    
    dispatch(userLogout())  
    dispatch(userLogoutStatus(false))  
    navigate('/')
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="curd-heading">
          <h3>CRUD App</h3>
        </Link>
      </div>
        <div className="navbar-right">
      {!isUserLogin ? (
        <>
          <Link to="login">
            <button className="btn-login">Login</button>
          </Link>
          <Link to="register">
            <button className="btn-register">Register</button>
          </Link>
        </>
      ):(
         
            <button onClick={LogoutUser} className="btn-register">Log Out</button>
          

      )}
        </div>
    </div>
  );
};

export default Navbar;
