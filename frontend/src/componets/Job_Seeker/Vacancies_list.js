import axios from "axios";
import React, { useEffect, useState } from "react";
import Vacancy_view from "./Vacancy_view";
import Vacancy_Not_Found from "../Lottie/Vacancy_Not_Found";
export default function Vacancies_list(props)
{
    var [data,setData]=useState();
    // useEffect(()=>{
    //     axios.post("https://backend-testing-1rgv.onrender.com/Lists",{
    //         experience:props.user.Experience,
    //         Field:props.user.Field,
    //         qualification:props.user.qualification
    //     }).then((data)=>{
    //         console.log(data.data)
            
    //         setData(data.data)
    //         console.log(data.data)
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // },[])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      axios
        .post("https://backend-testing-1rgv.onrender.com/Lists", {
          experience: props.user.Experience,
          Field: props.user.Field,
          qualification: props.user.qualification,
        })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, [props.user.Experience, props.user.Field, props.user.qualification]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    if (!data || data.length === 0) {
        return <Vacancy_Not_Found />;
      }
    return(
  <>
{data.map((obj, index) => (
  <div key={index} className="w-full flex justify-end lg:w-9/12 lg:ml-auto lg:justify-end my-4">
           <Vacancy_view
            mright="270px"
            show="false"
            qualification={props.user.qualification}
            Experience={props.user.Experience}
            Field={props.user.Field}
            email={obj.Company_email}
            description={obj.job_decription}
            number_of_places={obj.number_of_places}
            package={obj.package}
            mobile={obj.Mobile_no}
          />
        </div>
      ))}
    </>    
)
}