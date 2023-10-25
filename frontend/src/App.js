import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './componets/HomeScreen';
import Login from './componets/Admin/Login';
import Login_company from './componets/Company/Login';
import JobSeeker_Login from './componets/Job_Seeker/Login';
import { useState } from 'react';
import DashBoard from "./componets/Admin/DashBoard";
import Login_For from './componets/Login_Screen';
import Company_dashBoard from './componets/Company/CompanyDashboard';
import J_dashboad from './componets/Job_Seeker/j_DashBoard';

function App() {
  var [value,setValue]=useState();
  return (
   <Router>
    <Routes>
      
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/login/:userId" element={<Login_For/>}/>
      <Route path="/admindashboard" element={<DashBoard/>}/>
      <Route path="/companydashboard" element={<Company_dashBoard/>}/>
      <Route path="/jobberdashboard" element={<J_dashboad/>}/>
    </Routes>
   </Router>
  );
}

export default App;
