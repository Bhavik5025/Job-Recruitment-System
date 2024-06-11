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
    return(<> <div className="flex flex-col items-center justify-center mx-auto shadow-lg p-8 md:p-8 md:mt-10 md:shadow-lg h-screen w-auto">
        <img src={myimage} alt="Your image" className="im1 "/>
        <h1 className="heading m-10">Welcome Back!</h1>
        <div className="flex flex-col md:flex-row md:justify-center items-center">
            <button className="centered-button mb-2 md:mr-2" onClick={adminClick}>Admin</button>
            <button className="centered-button mb-2 md:mr-2" onClick={CompanyClick}>Company</button>
            <button className="centered-button mb-2 md:mr-2" onClick={JobSeekerClick}>Job Seeker</button>
        </div>
    </div>
     </>)
}