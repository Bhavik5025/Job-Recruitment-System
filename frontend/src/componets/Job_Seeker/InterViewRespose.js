import axios from "axios";
import React, { useEffect, useState } from "react";
import Interview from "./Interview";
export default function InterviewResponse()
{
    var [rdata,setRdata]=useState([]);
    useEffect(()=>{
        axios.post("http://localhost:3000/vacancy_Request_details_For_Jobber",{
            email:window.localStorage.getItem("email"),
            Approve:"true"
        }).then((data)=>{
            console.log(data.data.data)
              setRdata(data.data.data);  
        }

        )
    },[])
    return(<>{rdata?rdata.map((obj, index) => (
        <div key={index}><Interview description={obj.Job_description} cemail={obj.Company_email} address={obj.Address} Date={obj.Date} time={obj.Time}/></div>
      )):null}</>)
}