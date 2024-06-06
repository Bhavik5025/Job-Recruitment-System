import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Login_Component from "./Login_componet";
import Registration from "./Registration";
export default function Login_Form_Company() {
    var [selection,setSelection]=useState('login');
    const history = useNavigate();
    function transfer()
    {
        setSelection("registration");
    }
    function transfer1()
    {
        setSelection("login");
    }
    const handleChildData = (data) => {
        setSelection(data);
      };

    return (<>
    <div className="h-300 overflow-y-auto">
        {selection=="login"?<Login_Component select = {setSelection}/>:<Registration sendData={handleChildData} />}
        <div style={{marginTop:"5px",marginBottom:"20px"}}>
               {selection=="login"?<p className="text-center text-muted mt-5 mb-0 ml-12">If you are new user? Register Here For <a
                         className="fw-bold text-body" onClick={transfer}><u
                            style={{fontFamily: "Poppins", color: "#007bff",fontWeight: "bold",cursor:"pointer"}}>Company</u></a>
                  
                </p>:<p className="text-center text-muted mt-5 mb-0 ml-12">if You are Already User? Login  <a
                         className="fw-bold text-body" onClick={transfer1}><u
                            style={{fontFamily: "Poppins", color: "#007bff",fontWeight: "bold",cursor:"pointer"}}>Company</u></a>
                  
                </p>} 
                </div>
                </div>
    </>
    )
}