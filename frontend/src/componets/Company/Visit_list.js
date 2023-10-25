import axios from "axios";
import React, { useEffect, useState } from "react";
import Jobber_details from "./Jobber_Details";
import Visitor_details from "./Visitor_Details";
import NotFound from "./NotFound";

export default function Visit_list() {
  var [rdata, setRdata] = useState([]);
    
  useEffect(() => {
    axios
      .post("http://localhost:3000/visit_request_List", {
        cemail: window.localStorage.getItem("email"),
        Approve: "true",
      })
      .then((data) => {
        console.log(data.data.vsd);
        setRdata(data.data.vsd);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  return (<>
    {rdata.length === 0 ? <NotFound data="No visiter are available at the moment." /> : null}

            {rdata ? rdata.map((obj, index) => (
        <Visitor_details email={obj.Jobber_email} date={obj.Date} time={obj.Time} sta="show"/>
    )):null}
   
    </>) ;
}
