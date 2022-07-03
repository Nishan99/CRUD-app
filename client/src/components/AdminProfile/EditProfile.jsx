import axios from "axios";
import React, { useState, useEffect } from "react";
import './EditProfile.css'
import { useParams, useNavigate } from "react-router-dom";
const EditProfile = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [userDataStatus, setUserDataStatus] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:3001/profile/view/${id}`).then((res) => {
      setUserData(res.data[0]);
      console.log(res.data[0]);
      setUserDataStatus(true);
    });
  }, []);

  const updateByAdmin=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3001/profile/update/${id}`,userData).then(res=>{
      alert(res.data)
      navigate('/admin/overview')
    })
  }


  return <>{userDataStatus && <div>
    <div className="form-container">
    <h3>Edit User Details</h3>

      <form onSubmit={updateByAdmin}>
      <div class=" mb-3">
        <p>First Name:</p>
         <input required value={userData.firstName} onChange={e=>setUserData({firstName:e.target.value})} type="text" class="form-control" placeholder="First Name"/>
      </div>
      <div class=" mb-3">
        <p>Last Name:</p>
         <input required value={userData.lastName} onChange={e=>setUserData({lastName:e.target.value})} type="text" class="form-control" placeholder="Last Name"/>
      </div>
      <div class=" mb-3">
        <p>Age</p>
         <input required value={userData.age} onChange={e=>setUserData({age:e.target.value})} type="text" class="form-control" placeholder="Your Age"/>
      </div>
      <div class=" mb-3">
        <p>Email</p>
         <input required value={userData.email} onChange={e=>setUserData({email:e.target.value})} type="text" class="form-control" placeholder="E-mail address"/>
      </div>
      <div class=" mb-3">
        <p>Phone</p>
         <input required value={userData.phone} onChange={e=>setUserData({phone:e.target.value})} type="text" class="form-control" placeholder="Your Phone No"/>
      </div>
      <div class=" mb-3">
        <p>Address</p>
         <input required value={userData.address} onChange={e=>setUserData({address:e.target.value})} type="text" class="form-control" placeholder="Your Address"/>
      </div>
      <div class=" mb-3 mt-5">
        
         <input type="submit" class="btn btn-warning" value="Update Information"/>
      </div>
      </form>
    </div>
    </div>}</>;
};

export default EditProfile;
