import React from "react";
import myimage from "../images/jobber.avif";
import { useState,useLayoutEffect } from "react";
import Login_Form_Controler from "./Login_Form_Controler";
export default function JobSeeker_Login()
{
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
            console.log('Window width:', window.innerWidth);
            console.log('Is mobile:', isMobile);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);
    return(<>
    {/* <div className="shadow-lg p-8 md:p-8 md:mt-10 md:shadow-none flex flex-col items-center justify-center md:flex-row md:justify-center h-800">
    <div
                       className="w-full h-auto lg:w-3/12 lg:flex-shrink-0 bg-blue-500 bg-opacity-70 dark:bg-gray-800 lg:block hidden md:flex"
                       style={{ backgroundSize: 'cover', backgroundPosition: 'center', alignItems: 'center' }}
                   >
                   <img src={myimage} alt="Your mage" className="im" />
                   </div>
     
    <Login_Form_Controler/> 
    </div>*/}
 <div className="shadow-lg p-8 md:p-8 md:mt-10 md:shadow-none flex flex-col items-center justify-center md:flex-row md:justify-center h-800">
     <div
                        className="w-full h-auto lg:w-4/12 lg:flex-shrink-0 bg-blue-500 bg-opacity-70 dark:bg-gray-800 lg:block hidden md:flex"
                        style={{ backgroundSize: 'cover', backgroundPosition: 'center', alignItems: 'center' }}
                    >
                    <img src={myimage} alt="Your mage" className="im" />
                    </div>
      
     <Login_Form_Controler/>
</div>
  

</>)
}