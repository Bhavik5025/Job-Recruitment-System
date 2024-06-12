import axios from "axios";
import React, { useEffect, useState } from "react";
import Jobber_details from "./Jobber_Details";
import Visitor_details from "./Visitor_Details";
import NotFound from "./NotFound";

export default function Jobber_Visit_Request() {
  var [rdata, setRdata] = useState([]);
    var [refresh,setRefresh]=useState(false);
  useEffect(() => {
    axios
      .post("https://backend-testing-1rgv.onrender.com/visit_request_List", {
        cemail: window.localStorage.getItem("email"),
        Approve: "false",
      })
      .then((data) => {
        console.log(data.data.vsd);
        setRdata(data.data.vsd);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(()=>{
    axios
    .post("https://backend-testing-1rgv.onrender.com/visit_request_List", {
      cemail: window.localStorage.getItem("email"),
      Approve: "false",
    })
    .then((data) => {
      console.log(data.data.vsd);
      setRdata(data.data.vsd);
    })
    .catch((err) => {
      console.log(err);
    });
  },[refresh])
  function setresponsedata(e)
  {
    setRefresh(true);
  }
  return (<>
    <div className=" mx-auto mt-8">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
    <label className="parent_label text-2xl font-bold mb-4 ml-20 lg:ml-0 md:ml-0" style={{ fontFamily: "Poppins" }}>
    Visit Requests</label>
            {rdata.length === 0 ? <NotFound data="No visit requests are available at the moment." /> : null}

            {rdata ? rdata.map((obj, index) => (
        <Visitor_details email={obj.Jobber_email} date={obj.Date} time={obj.Time} datahandler={setresponsedata}/>
    )):null}
    </div>
    </div>
    </div>
    </>) ;
}
