import React from "react";
import myimage from "./images/Home_Icon.png";
export default function Selection()
{
    function adminClick()
    {
        window.location.href = "./Login/admin";
    }
    function CompanyClick()
    {
        window.location.href="./Login/company";
    }
    function JobSeekerClick()
    {
        window.location.href="./Login/job_seeker";
    }
    return(<> <div className="centered-div" style={{margin:"50px"}}>
        <img src={myimage} alt="Your mage" className="im1"/>
    <h1 className="heading">Welcome Back!</h1>
    <div className="button-container">
        <button className="centered-button" onClick={adminClick}>Admin</button>
        <button className="centered-button" onClick={CompanyClick}>Company</button>

        <button className="centered-button1" onClick={JobSeekerClick}>Job Seeker</button>

    </div>

</div> </>)
}