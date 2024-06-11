import React, { useState } from "react";
import Company_view from "./Company_view";
export default function Unverified_Company(props)
{
    var [status,setStatus]=useState(false);
    var [visible,setVisible]=useState(true);
    var divstyle={

        border: "1px solid",
        padding: "10px",
        boxShadow: "5px 10px 18px #c9c5c5",
        width:"1000px",
        height: "max-content",
        marginRight: "0px",
        marginTop: "20px",
        marginLeft: "245px",
        alignitems: "center",
        borderRadius: "10px",
        
        display: "flex"
    }
    function btnClick()
    {
        setStatus(true);
        setVisible(false);
    }
    function btclick()
    {
        setVisible(true);
        setStatus(false);
    }
    return(<><div className="flex flex-col sm:flex-row"> {/* flex-col for mobile, flex-row for larger screens */}
        <div className="input-bx mb-4 sm:mb-0 sm:mr-4" style={{ minWidth: "120px" }}> {/* mb-4 for margin bottom, sm:mr-4 for margin right on larger screens */}
          <label className="ilebel">Company Name</label><br />
          <label className="line">{props.name}</label>
        </div>
        <div className="hidden md:flex dline"></div>
        <div className="input-bx mb-4 sm:mb-0 sm:mr-4" style={{ minWidth: "120px" }}> {/* mb-4 for margin bottom, sm:mr-4 for margin right on larger screens */}
          <label className="ilebel">Mobile No.</label><br />
          <label className="line">{props.mobile}</label>
        </div>
        <div className="hidden md:flex dline"></div>
        <div className="input-bx mb-4 sm:mb-0 sm:mr-4" style={{ minWidth: "230px" }}> {/* mb-4 for margin bottom, sm:mr-4 for margin right on larger screens */}
          <label className="ilebel">Email id</label><br />
          <label className="line">{props.email}</label>
        </div>
        <div className="hidden md:flex dline"></div>
        {visible ? 
          <button className="centered-button1 mb-4 ml-2 sm:mt-0" onClick={btnClick} style={{ fontFamily: "Poppins", fontSize: "large", fontWeight: "bold" }}>View <i className="fa fa-angle-down" aria-hidden="true"></i></button> : 
          <button className="centered-button1  mb-4 ml-2 sm:mt-0" style={{ fontFamily: "Poppins", fontSize: "large", fontWeight: "bold" }} onClick={btclick}>Close <i className="arrow up"></i></button>
        }
      </div>
      
    {status==true?<Company_view status={props.status} img={props.image} name={props.name} address={props.address} mobile={props.mobile} verified={props.verified} email={props.email}/>:status=false}
  </>)
}