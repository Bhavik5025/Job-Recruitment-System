import axios from "axios";
import React, { useEffect, useState } from "react";
import Company_view from "./Company_view";

export default function Company_List() {
  const [user, setUserData] = useState({ Data: [] });

  useEffect(() => {
    axios.get("https://backend-testing-1rgv.onrender.com/verified_company_data")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);
  console.log(Array.isArray(user));
  console.log(user.Data);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 justify-center"> {/* Added justify-center */}
  <div className="mt-10 sm:mt-23">
    <h1 className="text-2xl font-bold mb-4 sm:mb-8 sm:ml-11" style={{ fontFamily: "Poppins" }}>Verified Company List</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-2/3 mx-auto"> {/* Added mx-auto */}
  {user.Data.map((company) => (
    <div key={company._id} className="flex justify-center"> {/* Added justify-center */}
      <Company_view
        status="verified"
        name={company.Company_name}
        mobile={company.Mobile_no}
        email={company.Email}
        img={company.Certificate}
        address={company.Address}
        verified={company.Verified}
      />
    </div>
  ))}
</div>

  </div>
</div>

  

  );
}
