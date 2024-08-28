
import React, { useState } from "react";
import InterviewResponse from "./InterViewRespose";
import VisitResponse from "./VisitResponse";

export default function CompanyResponse() {
  const [isInterview, setIsInterview] = useState(true);

  function handleHistoryClick() {
    console.log("hello")
    setIsInterview(false);
  };

  const handleNewClick = () => {
    console.log("jja")
    setIsInterview(true);
  };

  return (
    <div className="card-header mt-20 sm:mt-20 lg:mt-0 md:mt-0">
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
     <button
          className="centered-button"
          style={isInterview ? {backgroundColor:"white",color:"#007bff",border:"solid",width:"300px"}:{backgroundColor:"#007bff",width:"300px"}}
          onClick={handleNewClick}
        >
          Interview
        </button>
        <button
          className="centered-button"
          onClick={handleHistoryClick}
          style={!isInterview ? {backgroundColor:"white",color:"#007bff",border:"solid",width:"300px"}:{backgroundColor:"#007bff",width:"300px"}}
        >
          Visit Requests
        </button>
      </div>
      <div className="card-body   ">
        {isInterview ? <InterviewResponse /> : null}
        {!isInterview ? <VisitResponse /> : null}
      </div>
    </div>
  );
}
