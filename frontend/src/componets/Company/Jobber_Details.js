import React from "react";
import image from "../images/request.webp";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ResumeTemplete from "../Job_Seeker/Resume_Templete";
export default function Jobber_details(props) {
    console.log(props.sts)
    var [data, setData] = useState();
    var [visible, setVisible] = useState(false);
    var [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);
    var email = props.jemail;
    var [user, setUserData] = useState()
    var [jresume, setJresume] = useState(false);
    var [date, setDate] = useState();
    var [time, setTime] = useState();
    var [address, setAddress] = useState();
    const iconstyle = {
        fontSize: "24px",

        marginTop: "8px",
    };
    
    useEffect(() => {
        axios.get(`https://backend-testing-1rgv.onrender.com/jobber_details?email=${email}`
        ).then((data) => {
            // console.log(data)
            setData(data.data);
        });
        axios.post("https://backend-testing-1rgv.onrender.com/company_details", {
            email: window.localStorage.getItem("email")
        })
            .then((response) => {
                setUserData(response.data.Data);
                console.log(response.data.Data);

            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);
    function resumeView() {
        if (visible == true) {
            setImage(false);
            setVisible(false);
            setJresume(false)

        }
        else {

            if (data.resume != "true" && data.resume != "null") {
                setImage(true);
                setVisible(true)
            }
            if (data.resume == "true" && data.status == "true") {
                setJresume(true);
                setVisible(true);
            }
        }
    }
    function dateEnter(e) {
        setDate(e.target.value);
    }
    function timeEnter(e) {
        setTime(e.target.value);
    }
    function addressEnter(e) {
        setAddress(e.target.value);
    }
   
    const approvebtn = (event) => {
        event.preventDefault();
        setLoading(true);
        console.log(user.Company_name);
        axios.post("https://backend-testing-1rgv.onrender.com/Vacancy_Request_Update", {
            Company_email: window.localStorage.getItem("email"),
            Jobber_email: data.Email,
            description: props.description,
            date: date,
            time: time,
            Address: address,
            Approve: "true",
            cname: user.Company_name
        }).then((response) => {
            setLoading(false);
            if (response.data.data === "success") {
                alert("Successfully approved");
                props.senddata(true);
            }
        }).catch((error) => {
            setLoading(false);
            console.error('Error approving request:', error);
        });
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // return (<>  <div className="flex flex-col items-center min-h-screen">
    //     <div  >
    //     {jresume == true ? <ResumeTemplete user={data} type="company" /> : null}
    //         <label className="block font-poppins mt-2 text-lg ml-3">
    //             <i className="fa fa-asterisk" aria-hidden="true"></i> Job Description:-{props.description}
    //         </label>

    //         <label className="block font-poppins mt-2 text-lg ml-3">
    //             <i className="fa fa-user mr-2" aria-hidden="true"></i>
    //             {data ? data.Name : null}
    //         </label>
    //         <label className="block font-poppins mt-2 text-lg ml-3">
    //             <i className="fa fa-mobile mr-3" aria-hidden="true"></i>{data ? data.Mobile_no : null}
    //         </label>
    //         <label className="block font-poppins mt-2 text-lg ml-3">
    //             <i class="fa fa-file" aria-hidden="true"></i>Resume <button className="centered-button" style={{}} onClick={resumeView}>{visible ? "Close" : "View"}</button>
    //         </label>
    //         <br>
    //         </br>
    //         {image == true ? <p className="lead fw-normal mb-1">Certificate-<img src={data.resume} className="w-100 rounded-3" onClick={() => openModal(user.Certificate)} /></p>
    //             : null}
         


    //         {props.sts != "show" ?
    //             <form onSubmit={approvebtn}>

                  
    //                  <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" >
    //                     <i className="fa fa-calendar" aria-hidden="true" style={iconstyle}></i>
    //                     <h5 style={{ marginTop: "10px" }}>Interview Date</h5>
    //                     <div className="input-bx ml-5">
    //                     <input type="date" required="required" onChange={dateEnter} value={date} />

    //                     </div>
    //                 </div></li>
                 
    //                 <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" >
    //                     <i className="fa fa-clock-o" aria-hidden="true" style={iconstyle}></i>
    //                     <h5 style={{ marginTop: "10px" }}>Interview time</h5>
    //                     <div className="input-bx ml-5">
    //                         <input type="time" required="required" onChange={timeEnter} value={time} />

    //                     </div>
    //                 </div></li>
                    
    //                  <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" >
    //                     <i className="fa fa-building" aria-hidden="true" style={iconstyle}></i>
    //                     <h5 style={{ marginTop: "10px" }}>Address</h5>
    //                     <div className="input-bx ml-5">
    //                     <textarea type="text" required="required" onChange={addressEnter} value={address} />

    //                     </div>
    //                 </div></li>
    //                 <button type="submit" className="centered-button" style={{ marginBottom: "20px", backgroundColor: "green" }}>Approve</button>

    //             </form>
    //             : null
    //         }
    //     </div>
    return(<>
   <div className="flex flex-col items-center   px-4 lg:px-8 py-4">
 
    <div className="w-full max-w-4xl">
   
        <label className="block font-poppins mt-2 text-lg ml-3">
            <i className="fa fa-asterisk" aria-hidden="true"></i> Job Description: {props.description}
        </label>

        <label className="block font-poppins mt-2 text-lg ml-3">
            <i className="fa fa-user mr-2" aria-hidden="true"></i>
            {data ? data.Name : null}
        </label>

        <label className="block font-poppins mt-2 text-lg ml-3">
            <i className="fa fa-mobile mr-3" aria-hidden="true"></i>
            {data ? data.Mobile_no : null}
        </label>

        <label className=" font-poppins mt-2 text-lg ml-3 flex items-center">
            <i className="fa fa-file mr-2" aria-hidden="true"></i>
            Resume 
            <button className="ml-2 bg-blue-500 text-white px-3 py-1 rounded" onClick={resumeView}>
                {visible ? "Close" : "View"}
            </button>
        </label>
        {jresume && <ResumeTemplete user={data} type="company" />}
        {image && (
            <p className="lead fw-normal mb-1 mt-4">
                Certificate:
                <img src={data.resume} className="w-100 rounded-3 cursor-pointer" onClick={() => openModal(user.Certificate)} alt="Certificate" />
            </p>
        )}

        {props.sts !== "show" && (
            <form onSubmit={approvebtn} className="w-full mt-4">
                <li className="list-group-item my-2">
                    <div className="input-div2 flex items-center">
                        <i className="fa fa-calendar mr-2" aria-hidden="true" style={iconstyle}></i>
                        <h5 className="flex-grow mt-3">Date</h5>
                        <div className="input-bx ml-5">
                            <input type="date" required onChange={dateEnter} value={date} className="w-full p-2 border rounded" />
                        </div>
                    </div>
                </li>

                <li className="list-group-item my-2">
                    <div className="input-div2 flex items-center">
                        <i className="fa fa-clock-o mr-2" aria-hidden="true" style={iconstyle}></i>
                        <h5 className="flex-grow mt-3">Time</h5>
                        <div className="input-bx ml-5">
                            <input type="time" required onChange={timeEnter} value={time} className="w-full p-2 border rounded" />
                        </div>
                    </div>
                </li>

                <li className="list-group-item my-2">
                    <div className="input-div2 flex items-center">
                        <i className="fa fa-building mr-2" aria-hidden="true" style={iconstyle}></i>
                        <h5 className="flex-grow mt-3">Address</h5>
                        <div className="input-bx ml-5">
                            <textarea type="text" required onChange={addressEnter} value={address} className="w-full p-2 border rounded"></textarea>
                        </div>
                    </div>
                </li>

                <button type="submit" className="flex justify-center mt-4 bg-green-500 text-white px-4 py-2 rounded mx-auto block">
                {loading ? (
        <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0120 12h-4a4 4 0 00-4-4V2.5"></path>
        </svg>
    ) : (
        'Approve'
    )}
</button>

            </form>
        )}
    </div>


    {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={closeModal}>
                <div className="relative">
                    <img src={selectedImage} alt="Zoomed" className="rounded-3xl object-cover" style={{ maxHeight: "80vh", maxWidth: "80vw" }} />
                    <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
                </div>
            </div>
        )}
    </div></>)
}