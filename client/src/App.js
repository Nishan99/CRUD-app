import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import UserLogin from "./components/UserLoginn/UserLogin";
import UserRegister from "./components/UserRegister/UserRegister";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Profile from "../../client/src/components/Profile/Profile";
import AdminProfile from "./components/AdminProfile/AdminProfile";
import EditUser from "./components/Profile/EditUser";
import EditProfile from "./components/AdminProfile/EditProfile";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='admin' element={<AdminLogin/>}/>
          <Route path='login' element={<UserLogin/>}/>
          <Route path='register' element={<UserRegister/>}/>
          <Route path='user/:id' element={<Profile/>}/>
          <Route path='/user/edit/:id' element={<EditUser/>}/>
          <Route path='/admin/overview' element={<AdminProfile/>}/>
          <Route path='/admin/edit/:id' element={<EditProfile/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
