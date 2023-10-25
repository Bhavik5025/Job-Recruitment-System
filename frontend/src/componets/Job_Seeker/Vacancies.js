import React, { useEffect, useState } from "react";
import NotFound from "../Company/NotFound";
import Vacancies_list from "./Vacancies_list";
export default function Vacancies(props)
{
    var [data,setData]=useState();
    useEffect(()=>{
        setData(props.user);
    },[]);
    return(<>{data?data.status=="true"?<Vacancies_list user={props.user}/>:<div style={{marginLeft:"270px",marginTop:"30px"}}><NotFound data="First Create Resume,then you show Vacancies"/></div>:null}</>)
}