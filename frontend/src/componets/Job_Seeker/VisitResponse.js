import React, { useEffect, useState } from "react";
import axios from "axios";
import Interview from "./Interview";

export default function VisitCompanyResponse() {
  var [rdata, setRdata] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:3000/visit_response_for_user", {
      jemail: window.localStorage.getItem("email"),
      Approve: "true"
    }).then((data) => {
      console.log(data.data.data);
      setRdata(data.data.data);
    });
    
  }, []);

  return (
    <>{rdata?rdata.map((obj, index) => (
        <div key={index}><Interview status="true" cemail={obj.Company_email}  Date={obj.Date} time={obj.Time}/></div>
      )):null}</>
  );
}
