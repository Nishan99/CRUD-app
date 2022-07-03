import React, { useEffect, useState } from "react";
import "./EditUser.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Avatar from 'react-avatar';
const EditUser = () => {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({firstName:'',lastName:'',age:'',email:'',password:'',phone:'',address:''});
  const [userStatus, setUserStatus] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/profile/get/${id}`)
      .then((res) => {
        const {firstName, lastName, age, email, password, phone, address} = res.data
        setUserDetails({
          firstName, lastName, age, email, password, phone, address
        });
        setUserStatus(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateDetails=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3001/profile/update/${id}`,{
      firstName:userDetails.firstName,
      lastName:userDetails.lastName,
      age:userDetails.age,
      email:userDetails.email,
      password:userDetails.password,
      phone:userDetails.phone,
      address:userDetails.address,
    }).then(res=>{
      alert(res.data)
      navigate(`/user/${id}`)
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
    <div className="userdetails-edit">
      {userStatus && (
        <>
          <div className="useredit-left">
          <Avatar name={userDetails.firstName} size="100" round={true} color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} />
        <h3><span>{userDetails.firstName}</span><span>{userDetails.lastName}</span></h3>
          </div>
          <div className="useredit-right">
           <form onSubmit={updateDetails}>
            <div className="useredit-form-edit-field">

            <div className="useredit-form-grp ">
              <p>First Name</p>
              <input type="text" value={userDetails.firstName} onChange={e=>setUserDetails({firstName:e.target.value})} />
            </div>
            <div className="useredit-form-grp">
              <p>Last Name</p>
              <input type="text" value={userDetails.lastName} onChange={e=>setUserDetails({lastName:e.target.value})} />
            </div>
            <div className="useredit-form-grp">
              <p>Age</p>
              <input type="text" value={userDetails.age} onChange={e=>setUserDetails({age:e.target.value})} />
            </div>
            </div>
            <div className="useredit-form-edit-field">

            <div className="useredit-form-grp">
              <p>E-mail</p>
              <input type="text" value={userDetails.email} onChange={e=>setUserDetails({email:e.target.value})} />
            </div>
            <div className="useredit-form-grp">
              <p>Phone</p>
              <input type="text" value={userDetails.phone} onChange={e=>setUserDetails({phone:e.target.value})} />
            </div>
            <div className="useredit-form-grp">
              <p>Address</p>
              <input type="text" value={userDetails.address} onChange={e=>setUserDetails({address:e.target.value})} />
            </div>
            </div>
            <div className="useredit-form-edit-field">

              <div className="update-user-info">
                <input type='submit' value='Update Information' className="usereditinfo-btn-login"/>
              </div>
            </div>
           </form>
          </div>
        </>
      )}
    </div>
  );
};

export default EditUser;
