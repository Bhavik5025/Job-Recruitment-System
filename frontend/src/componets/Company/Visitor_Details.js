import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Visitor_details(props) {
    var [companydata,setUserData]=useState();
    var [visitordata, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://backend-testing-1rgv.onrender.com/jobber_details?email=${props.email}`
        ).then((data) => {
            // console.log(data)
            setData(data.data);
        });
        axios.post("https://backend-testing-1rgv.onrender.com/company_details", {
            email: window.localStorage.getItem("email")
        })
            .then((response) => {
                setUserData(response.data.Data);
                console.log(response.data.Data);

            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);
    function ApproveRequest()
    {
        setIsLoading(true);
        axios.post("https://backend-testing-1rgv.onrender.com/visit_request_update",{
            cemail:window.localStorage.getItem("email"),
            jemail:visitordata.Email,
            Approve:"false",
            date:props.date,
            time:props.time,
            cname:companydata.Company_name,
            caddress:companydata.Address
        }).then((data)=>{
            setIsLoading(false);
            if(data.data.data=="updated")
            {
                // console.log(data)
                props.datahandler(true);
                alert("successfully updated")
            }
           
        }).finally(()=>{
            setIsLoading(false);
        })
    }
    return (<>
        
        <div className="card  border border-black rounded-lg mt-4 shadow-md shadow-gray-300 p-4">
      <div>
        <label className="block font-poppins mt-2 text-lg">
          <i className="fa fa-user" aria-hidden="true"></i> Visitor Name: {visitordata ? visitordata.Name : null}
        </label>
        <label className="block font-poppins mt-2 text-lg">
          <i className="fa fa-phone" aria-hidden="true"></i> Mobile No: {visitordata ? visitordata.Mobile_no : null}
        </label>
        <label className="block font-poppins mt-2 text-lg">
          <i className="fa fa-envelope" aria-hidden="true"></i> Email: {visitordata ? visitordata.Email : null}
        </label>
        <label className="block font-poppins mt-2 text-lg">
          <i className="fa fa-graduation-cap" aria-hidden="true"></i> Graduation: <span>{visitordata ? visitordata.qualification + " " + visitordata.Field : null}</span>
        </label>
        <div className="mt-2 text-lg flex flex-col lg:flex-row lg:items-center">
          <label className="flex items-center">
            <i className="fa fa-calendar" aria-hidden="true"></i> Visit Date: {props.date}
          </label>
          <span className="lg:ml-4">
            <label className="flex items-center">
              <i className="fa fa-clock-o" aria-hidden="true"></i> Visit Time: {props.time}
            </label>
          </span>
        </div>
        {props.sta !== "show" && (
          <button
          className={`centered-button px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${isLoading ? 'cursor-not-allowed' : ''}`}
          onClick={ApproveRequest}
          disabled={isLoading}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"></path>
            </svg>
          ) : (
            'Approve'
          )}
        </button>
        )}
      </div>
    </div>
    </>)
}