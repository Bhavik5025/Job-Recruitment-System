import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Jobber_details from "./Jobber_Details";
import NotFound from "./NotFound";
export default function Jobber_Request() {
    var [update,setUpdate]=useState(false);
  var [j_data,setJdata]=useState([]);
    useEffect(()=>{
        axios.post("https://backend-testing-1rgv.onrender.com/vacancy_Request_details",{
            email:window.localStorage.getItem("email"),Approve:"false"
        }).then((data)=>{
            console.log(data.data)
            setJdata(data.data.data);
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    function handler(data)
    {
        console.log(data)
        setUpdate(data)
    }
    useEffect(()=>{
        if(update==true)
        {
            axios.post("https://backend-testing-1rgv.onrender.com/vacancy_Request_details",{
                email:window.localStorage.getItem("email"),Approve:"false"
            }).then((data)=>{
                console.log(data.data)
                setJdata(data.data.data);
            }).catch((error)=>{
                console.log(error)
            })
    
        }
            },[update])
    return (<>
<div className=" mx-auto mt-8">
      <div className="flex justify-center">
        <div className="w-10/12 max-w-4xl">
        <label className="parent_label text-2xl font-bold mb-4 mt-10 lg:mt-0 md:mt-0 ml-20 lg:ml-0 md:ml-0" style={{ fontFamily: "Poppins" }}>
            Job Requests
          </label>
          {j_data.length === 0 ? (
            <NotFound data="No job request found at the moment" />
          ) : (
            j_data.map((obj, index) => (
              <div key={index} className="mb-4 shadow-lg">
                <Jobber_details
                  Approve={obj.Approve}
                  description={obj.Job_description}
                  jemail={obj.Jobber_email}
                  senddata={handler}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </>)
}