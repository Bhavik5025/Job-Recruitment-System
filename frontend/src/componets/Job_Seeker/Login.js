import React from "react";
import myimage from "../images/jobber.avif";
import Login_Form_Controler from "./Login_Form_Controler";
export default function JobSeeker_Login()
{
    return(<><div className="shadow-lg p-8 md:p-8 md:mt-10 md:shadow-none flex flex-col items-center justify-center md:flex-row md:justify-center h-800">
    <div
                       className="w-full h-auto lg:w-3/12 lg:flex-shrink-0 bg-blue-500 bg-opacity-70 dark:bg-gray-800 lg:block hidden md:flex"
                       style={{ backgroundSize: 'cover', backgroundPosition: 'center', alignItems: 'center' }}
                   >
                   <img src={myimage} alt="Your mage" className="im" />
                   </div>
     
    <Login_Form_Controler/>
</div></>)
}