import axios from "axios";
import React, { useEffect, useState } from "react";
import Vacancy_view from "./Vacancy_view";
export default function Vacancies_list(props)
{
    var [data,setData]=useState();
    useEffect(()=>{
        axios.post("https://backend-testing-1rgv.onrender.com/Lists",{
            experience:props.user.Experience,
            Field:props.user.Field,
            qualification:props.user.qualification
        }).then((data)=>{
            console.log(data.data)
            setData(data.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return(<>{data?data.map((obj, index) => (
        <div key={index}>
          <Vacancy_view mright="270px"  show="false" qualification={props.user.qualification} Experience={props.user.Experience}  Field={props.user.Field} email={obj.Company_email} description={obj.job_decription} number_of_places={obj.number_of_places} package={obj.package} mobile={obj.Mobile_no}/>
     
        </div>)):null}</>)
}