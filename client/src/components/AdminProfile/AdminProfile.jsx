import React, { useEffect, useState } from "react";
import "./AdminProfile.css";
import axios from "axios";
import { FaEye, FaTrash } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
      import { GoLocation } from "react-icons/go";
import { AiFillEdit, AiOutlineMail, AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const AdminProfile = () => {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [userStatus, setUserStatus] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3001/profile").then((res) => {
      setUserDetails(res.data);
      setUserStatus(true);
    });
  }, []);

  const viewModel=(data)=>{

    setModalData(data)
    setModalStatus(true)
  }

  const deleteUser=(id)=>{
  
    axios.delete(`http://localhost:3001/profile/delete/${id}`).then(res=>{
     alert(res.data)
     setUserDetails(userDetails.filter(item=>{ return item.id !== id} ))
    })
  }
  return (
    <div>
      {userStatus && (
        <div className="admin-view">
          <h2>User Details</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userDetails.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td>{item.address}</td>
                    <td>{item.phone}</td>
                    <td>
                      <FaEye onClick={()=>viewModel(item)}  className="admin-table-icon" data-bs-toggle="modal" data-bs-target="#exampleModal"/>

                      <AiFillEdit onClick={()=>navigate(`/admin/edit/${item.id}`)} className="admin-table-icon" />

                      <FaTrash onClick={()=>deleteUser(item.id)} className="admin-table-icon" />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

         {modalStatus && (

           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">User Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><AiOutlineUser className="modal-icon"/>{modalData.firstName}  {modalData.lastName}</p>
        <p><AiOutlineMail className="modal-icon"/>{modalData.email}</p>
        <p><BsFillCalendarDateFill className="modal-icon"/>{modalData.age}</p>
        <p><GoLocation className="modal-icon"/>{modalData.address}</p>
        <p><AiOutlinePhone className="modal-icon"/>{modalData.phone}</p>
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>

)}

        </div>
      )}
    </div>
  );
};

export default AdminProfile;
