import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Company_SideBar from "./Company_sidebar";
export default function Company_dashBoard()
{
    const history=useNavigate();
    const token=window.localStorage.getItem("token");
    useEffect(()=>{
        if(token==null)
        {
            history("/login/company")
        }
    },[])  
    return(<><Company_SideBar/></>)
}