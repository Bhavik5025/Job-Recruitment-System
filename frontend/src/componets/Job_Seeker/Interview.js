import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Interview(props)
{
    var [company,setCompanyData]=useState();
    useEffect(()=>{
        axios.post("https://backend-testing-1rgv.onrender.com/company_details", {
            email: props.cemail
        })
            .then((response) => {
                setCompanyData(response.data.Data);
                //console.log(response.data.Data);
              console.log("hell")
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    },[])
    return(<><div style={{border:"1px solid #000000",borderRadius:"10px",marginTop:"10px",boxShadow: "5px 10px 18px #c9c5c5",}}>
       
    <div >
  
    {props.status !== "true" ? (
  <div>
    <label style={{ fontFamily: "Poppins", marginTop: "10px", fontSize: "20px",marginLeft:"5px" }}>
      <i className="fa fa-asterisk" aria-hidden="true"></i> Job Description:
    </label>
    <label style={{ fontFamily: "Poppins", marginTop: "10px", fontSize: "20px", }}>
      {props.description}
    </label>
    <br />
  </div>
) : null}
<div className="flex flex-col">
<label style={{fontFamily:"Poppins",marginTop:"10px",fontSize:"20px",marginLeft:"5px"}}><i class="fa fa-building" aria-hidden="true"></i>Company Name: {company?company.Company_name:null}</label>
    
    <label style={{fontFamily:"Poppins",marginTop:"10px",marginLeft:"5px",fontSize:"20px"}}><i class="fa fa-envelope" aria-hidden="true"></i> {props.cemail}</label>
    <label style={{fontFamily:"Poppins",marginTop:"10px",marginLeft:"5px",fontSize:"20px"}}><i class="fa fa-phone" aria-hidden="true"></i> {company?company.Mobile_no:null}</label><br/>
  
</div>
  {props.status!="true"?(<div className="mb-5 ml-5" style={{marginTop:"10px"}}>
              <p className="lead fw-normal mb-1 ml-5"><i class="fa fa-asterisk" aria-hidden="true"></i>About Interview</p>
                <div className="p-4" style={{backgroundColor: "#f8f9fa"}}>
                <p className="lead fw-normal mb-1">Address: {props.address}</p>
                  <p className="lead fw-normal mb-1">Date: {props.Date}</p>
                  <p className="lead fw-normal mb-1">Time: {props.time}</p>
                  
                </div>
                
              </div>):<div className="mb-5 ml-5 mr-5" style={{marginTop:"10px"}}>
              <p className="lead fw-normal mb-1"><i class="fa fa-asterisk" aria-hidden="true"></i>About Visit</p>
                <div className="p-4" style={{backgroundColor: "#f8f9fa"}}>
                  <p className="lead fw-normal mb-1">Date: {props.Date}</p>
                  <p className="lead fw-normal mb-1">Time: {props.time}</p>
                  
                </div>
                
              </div>} 
      </div> </div></>)
}