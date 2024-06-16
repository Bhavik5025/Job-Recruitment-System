import axios from "axios";
import React, { useState, useEffect } from "react";
import Vacancy_view from "./Vacancy_view";
import Company_view from "../Admin/Company_view";
import Loading from "../Lottie/Loading";
export default function Visit_Request() {
  const [user, setUserData] = useState({ Data: [] });
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    axios.get("https://backend-testing-1rgv.onrender.com/verified_company_data_For_Visit")
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);
  return (<>       
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
  <div className="mt-10 sm:mt-23 w-full sm:w-2/3 mx-auto">
    <h1 className="parent_label text-2xl font-bold mb-0 ml-20 lg:ml-0 md:ml-0" style={{ fontFamily: "Poppins" }}>Company List</h1>
  </div>
  {loading ? (
    <div className="flex justify-center items-center">
      <Loading />
    </div>
  ) : (
    <div className="flex flex-col items-end gap-4 mt-4 w-full">
      {user.Data.map((company) => (
        <div key={company._id} className="w-full flex justify-end">
          <div className="w-full sm:w-2/3 lg:w-10/12">
            <Company_view
              show="true"
              status="verified"
              name={company.Company_name}
              mobile={company.Mobile_no}
              email={company.Email}
              img={company.Certificate}
              address={company.Address}
              verfied={company.Verified}
            />
          </div>
        </div>
      ))}
    </div>
  )}
</div>

    </>)
}