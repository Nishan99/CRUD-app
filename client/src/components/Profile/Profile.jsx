import React,{useEffect, useState} from 'react'
import './Profile.css'
import Avatar from 'react-avatar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Profile = () => {
  const {id} = useParams()
 const navigate = useNavigate()

  const [data, setData] = useState('')
  const [userStatus, setUserStatus] = useState(false)
  
  
console.log('datas',data)
useEffect(()=>{
  axios.get(`http://localhost:3001/profile/view/${id}`).then(res=>{
     
      setData(res.data[0])
      setUserStatus(true)
    })
      console.log('datas',data) 

  },[])
  
  return (
    <div>
     
     {userStatus && (
      <div className='userprofile'>
      <div className="userprofile-left">
      <Avatar name={data.firstName} size="100" round={true} color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} />
        <h3><span>{data.firstName}</span><span>{data.lastName}</span></h3>
      </div>
      <div className="userprofile-right">
        <div className='flex-user-profie'>
        <div className='profile-grp'>
          <p>First Name</p>
          <p>{data.firstName}</p>
        </div>
        <div className='profile-grp'>
          <p>Last Name</p>
          <p>{data.lastName}</p>
        </div>
        <div className='profile-grp'>
          <p>Age</p>
          <p>{data.age }</p>
        </div>
        </div>
        <div className='flex-user-profie'>
        <div className='profile-grp'>
          <p>Email</p>
          <p>{data.email}</p>
        </div>
        <div className='profile-grp'>
          <p>Phone</p>
          <p>{data.phone}</p>
        </div>
        <div className='profile-grp'>
          <p>Address</p>
          <p>{data.address }</p>
        </div>
        </div>
        <div className='flex-user-profie'>
          <div className="user-profile-btns">
            {/* <Link to={`/user/edit/${data.id}`}> */}
            <button onClick={()=>navigate(`/user/edit/${data.id}`)}>Edit Information</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
      </div>
     )}
    </div>
  )
}

export default Profile