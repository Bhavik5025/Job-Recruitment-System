import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Job_Seeker_SideBar from "./Job_Seeker_Sidebar";

export default function J_dashboad()
{
    const history=useNavigate();
 
    const email=window.localStorage.getItem("email");
   
    const token=window.localStorage.getItem("token");
    useEffect(()=>{
        if(token==null)
        {
            history("/login/job_seeker")
        }
    },[])  
    return(<><Job_Seeker_SideBar/></>)
}