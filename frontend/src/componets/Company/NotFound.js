import React from "react";

import image from "../images/sorry.webp";
export default function NotFound(props)
{
    return(<><div className="flex items-center justify-center min-h-screen">
        <div className="shadow-lg p-3 mb-5 bg-white rounded card-body text-center">
          <img src={image} alt="Company Image" className="mx-auto mb-4" />
          <ul className="list-none">
           
              <li className="mb-2">{props.data}</li>
         
          </ul>
        </div>
      </div></>)
}