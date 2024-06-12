import React, { useState } from "react";
import NewVacancies from "./Newvacancies";
import History from "./History";
export default function Vacancies()
{
    var [stylish,setStyle]=useState(true);
    function historyclick()
    {
        setStyle(false);
    }
    function newclick()
    {
        setStyle(true);
    }
    return(<><div className="card text-center mt-20 lg:mt-10 md:mt-10" >
    <div className="card-header">
    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
    <button
        className={`centered-button sm:w-auto`}
        style={stylish==true?{backgroundColor:"white",color:"#007bff",border:"solid",width:"300px"}:{backgroundColor:"#007bff",width:"300px"}} 
        onClick={newclick}
      >
        new
      </button>
      <button
        className={`centered-button `}
        style={stylish==false?{backgroundColor:"white",color:"#007bff",border:"solid",width:"300px"}:{backgroundColor:"#007bff",width:"300px"}} 
       
        onClick={historyclick}
      >
        history
      </button>
</div>

    </div>

    <div class="card-body">
            {stylish==true?<NewVacancies/>:<History/>}
  </div>
    </div></>)
}