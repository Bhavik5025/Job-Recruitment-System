import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Resume_View from "./Resume_View"; 
import axios from "axios";
import News from "./News";
import Vacancies from "./Vacancies";
import Company_response from "./Company_response";
import Visit_Request from "./Visit_request";

export default function Job_Seeker_SideBar()
{
    var [user,setUser]=useState({});
    const email=window.localStorage.getItem("email");
    useEffect(()=>{
        axios.get(`http://localhost:3000/jobber_details?email=${email}`,).then((data)=>{
            setUser(data.data);
            console.log(data.data)
            console.log(user);
        }).catch((err)=>{
            console.log(err);
        })
        console.log(window.localStorage.getItem("email"));
    },[]);
    const [selectedField, setSelectedField] = useState('Dashboard');
    var [visible,setVisible]=useState();
  
    const navigate = useNavigate(); // Initialize the navigate function
   
    
    const handleItemClick = (field) => {
        setSelectedField(field);
      };
      function logout() {
        console.log("hha");
        handleItemClick('Sign Out');
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("type");
        navigate('/'); // Use navigate to navigate to the desired route
      }
   return(<>
   <div className="sidebar">
      <div className="sidebar-header">
        <i className="fa-solid fa-apartment"></i>
        <span>Job Recruitment System</span>
      </div>
      <ul className="sidebar-menu">
        <li
          className={selectedField === 'Dashboard' ? 'active' : ''}
          onClick={() => handleItemClick('Dashboard')}
        >
          <i className="fa fa-home"></i>
          <span>Dashboard</span>
        </li>
        <li
          className={selectedField === 'Profile' ? 'active' : ''}
          onClick={() => handleItemClick('Profile')}
        >
          <i className="fa fa-user" aria-hidden="true"></i>
          <span>Profile</span>
        </li>
        <li
          className={selectedField === 'Appliers' ? 'active' : ''}
          onClick={() => handleItemClick('Appliers')}
        >
          <i className="fa fa-tasks" aria-hidden="true"></i>
          <span>Vacancies</span>
        </li>
        <li
          className={selectedField === 'Visit Request' ? 'active' : ''}
          onClick={() => handleItemClick('Visit Request')}
        >
          <i className="fa fa-user" aria-hidden="true"></i>
          <span>Visit Request</span>
        </li>
        <li
          className={selectedField === 'Company Response' ? 'active' : ''}
          onClick={() => handleItemClick('Company Response')}
        >
          <i className="fa fa-tasks" aria-hidden="true"></i>
          <span>Company Response</span>
        </li>
        <li
          className={selectedField === 'Sign Out' ? 'active' : ''}
          onClick={logout}
        >
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <span>Sign Out</span>
        </li>
      </ul>
    </div>
    {selectedField=="Dashboard"?<News/>:null}
   
    {selectedField=="Profile"?({user}?<Resume_View user={user}/>:null):null}
    {selectedField=="Appliers"?({user}?<Vacancies user={user}/>:null):null}
    {selectedField=="Company Response"?({user}?<Company_response user={user}/>:null):null}
    
    {selectedField=="Visit Request"?({user}?<Visit_Request user={user}/>:null):null}
    </>)
}