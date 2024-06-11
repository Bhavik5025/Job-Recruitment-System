import React, { useEffect } from "react";

import { useParams, useNavigate } from 'react-router-dom';
import Selection from "./Selection";
import '../Styling/main.css';
export default function HomeScreen() {
    const token=window.localStorage.getItem("token");
    const type=window.localStorage.getItem("type");
    const history = useNavigate();
   useEffect(()=>{
    if(token!=null && type=="admin")
    {
        history("/admindashboard");
    }
    if(token!=null && type=="company")
    {
        history("/companydashboard");
    }
    if(token!=null && type=="job_seeker")
    {
        history("/jobberdashboard")
    }
   },[])
    return (<>
      <div className="h-auto">   
           <Selection/>
      </div>
      </>);
}