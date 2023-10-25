import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Company_profile from "./Company_profile";
import axios from "axios";
import Profile from "./Profile";
import AddVacancies from "./AddVacancies";
import Jobber_Request from "./Jobber_Request";
import Visit_Request from "../Job_Seeker/Visit_request";
import Jobber_Visit_Request from "./Jobber_Visit_request";
import ApproveList from "./approvelist";
export default function Company_SideBar()
{
    const [selectedField, setSelectedField] = useState('Dashboard');
    var [visible,setVisible]=useState();
    var [visible1,setVisible1]=useState(false);
    const navigate = useNavigate(); // Initialize the navigate function
    useEffect(()=>{
      axios.post("http://localhost:3000/company_dashboard_data",{
        email:window.localStorage.getItem("email")
      }).then((obj)=>{
        console.log(obj);
        if(obj.data.data==true)
        {
          setVisible(true);
        }
        else{
          setVisible(false);
        }

      })
    
    },[]);
    const handledata = (data) => {
      setVisible(data);
     
    };
   
    
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
          className={selectedField === 'Add Vacancies' ? 'active' : ''}
          onClick={() => handleItemClick('Add Vacancies')}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
          <span>Add Vacancies</span>
        </li>
        <li
          className={selectedField === 'Appliers' ? 'active' : ''}
          onClick={() => handleItemClick('Appliers')}
        >
          <i className="fa fa-tasks" aria-hidden="true"></i>
          <span>Appliers</span>
        </li>
        <li
          className={selectedField === 'Visit Requests' ? 'active' : ''}
          onClick={() => handleItemClick('Visit Requests')}
        >
          <i className="fa fa-clock-o" aria-hidden="true"></i>
          <span>Visit Requests</span>
        </li>
        <li
          className={selectedField === 'approve Requests' ? 'active' : ''}
          onClick={() => handleItemClick('approve Requests')}
        >
          <i className="fa fa-check" aria-hidden="true"></i>
          <span>Approve List</span>
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
    {/* {selectedField=="Dashboard"?visible==false?<Company_profile visible={handledata}/>:<Profile/>:selectedField=="Add Vacancies"?visible==true?<AddVacancies />:handlevacancies():console.log("heloo")} */}
    {selectedField === "Dashboard" && visible === false ? (
        <Company_profile visible={handledata} />
      ) : null}

      {selectedField === "Dashboard" && visible === true ? (
        <Profile />
      ) : null}
    {selectedField === "Add Vacancies"  ? (
        <AddVacancies  />
      ) : null}
      {selectedField==="Appliers"?<Jobber_Request/>:null}
      {selectedField==="Visit Requests"?<Jobber_Visit_Request/>:null}
      {selectedField==="approve Requests"?<ApproveList/>:null}
        </>)

}