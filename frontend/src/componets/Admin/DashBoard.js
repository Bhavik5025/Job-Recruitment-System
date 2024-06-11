import Company_List from './Company_List';
import { useState,useEffect } from 'react';
import Verified_Company from './Verified_company_list';
import { useNavigate } from 'react-router-dom';
import SideBar from "./SideBar";

export default function DeshBoard()
{
    const history = useNavigate();
  const [selectedField, setSelectedField] = useState(null); // State to hold selected field data

  // Callback function to receive selectedField from Sidebar
  const handleSelectedField = (field) => {
    // Set the selectedField received from Sidebar to state
    setSelectedField(field);
  };
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    if (token == null) {
      history("/login/admin")
    }
  })

  console.log(token);
  return (
    <>
    <div className="flex flex-col lg:flex-row h-auto">
  <SideBar sendSelectedFieldToParent={handleSelectedField} className="lg:w-1/3" />
  <div className="w-full lg:w-1/12"></div> {/* Spacer */}
  <div className="flex-grow lg:ml-10 lg:w-8/12"> {/* Use margin left for space on larger screens */}
    {selectedField === "Dashboard" ? <Verified_Company /> : <Company_List />}
  </div>
</div>


    </>);
}