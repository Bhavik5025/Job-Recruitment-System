import axios from "axios";
import React, { useEffect,useState } from "react";

import jsPDF from "jspdf";
import domtoimage from 'dom-to-image';
import { ReactComponent as PhoneIcon } from "../icons/phone.svg";
import { ReactComponent as EnvelopeIcon } from "../icons/envelope.svg";
import { ReactComponent as CircleIcon } from "../icons/circle.svg";
import { ReactComponent as BuildingIcon } from "../icons/building.svg";
import { ReactComponent as MapMarkerIcon } from "../icons/map-marker.svg";
import { ReactComponent as UniversityIcon } from "../icons/university.svg";
import { ReactComponent as GraduationCapIcon } from "../icons/graduationcap.svg";
import { ReactComponent as CertificateIcon } from "../icons/certificate.svg";
import { ReactComponent as FutbolIcon } from "../icons/futball.svg";
import Loading from "../Lottie/Loading";
export default function ResumeTemplete(props)
{
    var [data,setData]=useState();
    const [loading, setLoading] = useState(true);
    
  const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(()=>{
        axios.post("https://backend-testing-1rgv.onrender.com/get_resume_data",{email:props.user.Email}).then((data)=>{
            setData(data.data.data)
            if(data)
            {
                data.skill.map((data)=>{
                    console.log(data)
                })
                console.log(props.user.image);
            }
            setLoading(false);
         
        }).catch((error)=>{
            console.log(error);
            setLoading(false);
        })
    },[]);
     function handleImageLoad() {
    setImageLoaded(true);
  }

  
  
    
      function generatePDF() {
        if (window.innerWidth <= 768) { // Assuming 768px is the threshold for mobile screens
          alert("Please open on a computer screen to generate the PDF.");
          return;
        }
        const contentToPrint = document.getElementById("di");
      
        domtoimage
          .toPng(contentToPrint, { bgcolor: '#ffffff' }) 
          .then((dataUrl) => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = contentToPrint.clientWidth;
            canvas.height = contentToPrint.clientHeight;
      
            const img = new Image();
            img.src = dataUrl;
            img.onload = function () {
              context.drawImage(img, 0, 0, canvas.width, canvas.height);
      
              // Create a PDF document
              const pdf = new jsPDF("p", "mm", "a4"); // A4 size
              const width = pdf.internal.pageSize.getWidth();
              const height = (canvas.height * width) / canvas.width;
      
              // Add the canvas content to the PDF
              pdf.addImage(canvas, "PNG", 0, 0, width, height);
      
              // Save the PDF with the desired name
              pdf.save("MyResume.pdf");
            };
          })
          .catch((error) => {
            console.error("Error generating PDF: ", error);
          });
      }
      
    
    return(<>
       
    {props.type !== "company" && (
    <div className="flex justify-end mt-2 sm:mt-0 mb-0" style={{ width: '100%' }}>
      <button className="pl-4 pr-2 pt-2 pb-2 bg-blue-500 text-white rounded-lg" onClick={generatePDF}>
      <i class="fa fa-download" aria-hidden="true"></i>
      </button>
    </div>
  )}
  <div className="flex flex-col items-center min-h-screen">
  {loading ? (
         <Loading/>
        ) : (
          <div className="flex justify-center items-center w-full min-h-screen overflow-y-auto  lg:ml-20">
    <div className="resume-container w-full max-w-4xl bg-white rounded-lg p-8" style={{ fontFamily: 'Poppins, sans-serif', maxWidth: '210mm', maxHeight: '297mm' }}>
        <div className="flex flex-col md:flex-row">
            <div className="left-box w-full md:w-1/2 p-4" style={{minWidth:"300px"}}>
                <div className="profile flex justify-center mb-4">
                    <div className="w-32 h-32 overflow-hidden rounded-full">
                        <img src={props.user.image} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="content-box">
                    <h2 className="text-xl font-semibold">Profile Info</h2>
                    <hr className="my-2" />
                    {data && <p className="text-gray-700 break-words">{data.objective}</p>}
                    <h3 className="mt-4 text-lg flex items-center break-words">
                        <EnvelopeIcon className="mr-2 mt-1" style={{ width: "15px", height: "14px" }} /> {props.user.Email}
                    </h3>
                    <h3 className="text-lg flex items-center break-words">
                        <PhoneIcon className="mr-2 mt-1" style={{ width: "18px", height: "16px" }} /> {props.user.Mobile_no}
                    </h3>
                    <h2 className="text-xl font-semibold mt-6">My Skills</h2>
                    <hr className="my-2" />
                    {data && data.skill.map((skill, index) => (
                        <div className="flex items-center my-2 break-words" key={index}>
                            <div className="w-1/2 text-gray-700">{skill}</div>
                            <div className="w-1/2 flex">
                                <CircleIcon className="mr-2" />
                                <CircleIcon className="mr-2" />
                                <CircleIcon className="mr-2" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-box w-full md:w-1/2 p-4" style={{minWidth:"300px"}}>
                <h1 className="text-3xl font-bold break-words">{props.user.Name}</h1>
                <p className="text-lg text-gray-700 mb-10 break-words">{data ? data.Field : null}</p>
                <h2 className="text-xl font-semibold mt-6">Work Experience</h2>
                <hr className="my-2" />
                {props.user.Experience === "0" ? (
                    <div className="my-2 break-words">
                        <p className="text-gray-700">Fresher</p>
                    </div>
                ) : (
                    <>
                        <div className="my-2 flex items-center break-words">
                            <p className="text-gray-700">{data ? data.Starting_date : null}</p>
                            <p className="text-gray-700 mx-2">To</p>
                            <p className="text-gray-700">{data ? data.Ending_date : null}</p>
                        </div>
                        <span className="text-gray-700 flex items-center break-words">
                            <BuildingIcon className="mr-2 mt-1" style={{ width: "15px", height: "14px" }} /><label>{data ? data.Description : null}</label>
                        </span>
                        <div className="my-2 break-words">
                            <p className="text-gray-700">{data ? data.title : null}</p>
                            <span className="text-gray-700 flex items-center break-words">
                                <MapMarkerIcon className="mr-2 mt-1" style={{ width: "18px", height: "18px" }} /> {data ? data.working_location : null}
                            </span>
                        </div>
                    </>
                )}
                <h2 className="text-xl font-semibold mt-6">My Education</h2>
                <hr className="my-2" />
                <div className="my-2 flex items-center break-words">
                    <div className="flex flex-col">
                        <p className="text-gray-700">{data ? data.GraduationYear : null}</p>
                    </div>
                </div>
                <div className="my-2 flex items-center break-words">
                    <UniversityIcon className="mr-2" style={{ width: "18px", height: "18px" }} />
                    <div className="flex flex-col">
                        <span className="text-gray-700">{data ? data.college : null}</span>
                    </div>
                </div>
                <div className="my-2 flex items-center break-words">
                    <GraduationCapIcon className="mr-2" style={{ width: "18px", height: "18px" }} /> {props.user.Field}
                </div>
                <div className="my-2 flex items-center break-words">
                    <CertificateIcon className="mr-2" style={{ width: "18px", height: "18px" }} /> Cpi: {data ? data.cpi : null}
                </div>
                <h2 className="text-xl font-semibold mt-10">Hobbies</h2>
                <hr />
                <div className="my-2 flex items-center break-words">
                    <FutbolIcon className="mr-2" style={{ width: "18px", height: "18px" }} /> {data && <span>{data.hobbies}</span>}
                </div>
            </div>
        </div>
    </div>
</div>

        )}

</div>

        </>);
}