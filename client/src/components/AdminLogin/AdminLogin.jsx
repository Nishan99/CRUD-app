import React, { useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveData, userLogin } from "../../Redux/actions/allActions";
const AdminLogin = () => {
  const isUserLogin = useSelector(
    (state) => state.persistReducers.userLoginStatus
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const loginUser = (e) => {
    e.preventDefault();
    if (
      loginDetails.username === "admin" &&
      loginDetails.password === "admin"
    ) {
      dispatch(userLogin(true));

      navigate("/admin/overview");
    }else{
      alert('login details incorrect')
    }
  };
  return (
    <div className="admin-login">
      <div className="form-login-user-container">

     
      <h3>Admin Login</h3>
      <form onSubmit={loginUser}>
        <div  className='userlogin-input-grp'>
          <p>username:</p>
          <input
            type="text"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, username: e.target.value })
            }
          />
        </div>

        <div className="userlogin-input-grp">
          <p>Password:</p>
          <input
            type="password"
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
        </div>

        <input type="submit" value="Login"  className="adminlogin-btn-login"  />
      </form>
      </div>
    </div>
  );
};

export default AdminLogin;
