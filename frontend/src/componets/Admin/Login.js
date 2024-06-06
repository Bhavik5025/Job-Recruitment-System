import React, { useState, useLayoutEffect } from "react";
import myimage from "../images/admin.avif";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login_Form from "./Login_Form";

export default function Login() {
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

    return (
      <div className="shadow-lg p-8 md:p-8 md:mt-10 md:shadow-none flex flex-col items-center justify-center md:flex-row md:justify-center">
      {!isMobile && <img src={myimage} alt="Your mage" className="im mb-8 md:mb-0 md:mr-8 md:self-start" />}
      <Login_Form/>
  </div>
  

    );
}
