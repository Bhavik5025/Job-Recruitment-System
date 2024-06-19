import axios from "axios";
import React, { useEffect, useState } from "react";
import Unverified_Company from "./Unverified_Companies";
import Loading from "../Lottie/Loading";
import NotFound from "../Company/NotFound";

export default function Company_List() {
  const [user, setUserData] = useState({ Data: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://backend-testing-1rgv.onrender.com/company_data")
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mt-23 w-full">
        <h1 className="text-2xl font-bold mb-4 sm:mb-8" style={{ fontFamily: "Poppins" }}>Company List</h1>
        {loading ? (
          <div className="flex justify-center items-center">
            <Loading /> {/* Use Loading component or simple text */}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {user.Data.length !== 0 ? (
              user.Data.map((company) => (
                <div key={company._id} className="w-full sm:w-auto lg:w-full">
                  <Unverified_Company
                    status="unverified"
                    name={company.Company_name}
                    mobile={company.Mobile_no}
                    email={company.Email}
                    image={company.Certificate}
                    address={company.Address}
                    verified={company.Verified}
                  />
                </div>
              ))
            ) : (
              <NotFound data="Company not available" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
