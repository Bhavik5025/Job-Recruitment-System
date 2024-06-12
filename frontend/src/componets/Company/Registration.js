import axios from "axios";
import React, { useState } from "react";
export default function Registration({sendData}) {
    var [email, setEmail] = useState('');
    var [Status,setStatus]=useState('registration');
    var [password, setPassword] = useState('');
    var [certificate, setCertificate] = useState('');
    var [address, setAddress] = useState('');
    var [mobile, setMobile] = useState('');
    var [company, setCompany] = useState('');
    var [confirmpassword, setConfirmPassword] = useState('');
    var [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);

    function emailenter(event) {
        setEmail(event.target.value);
    }
    function passwordenter(event) {
        setPassword(event.target.value);

    }
    function companyEnter(event) {
        setCompany(event.target.value);
    }

    function confirmpasswordEnter(event) {
        setConfirmPassword(event.target.value);
    }
    function mobileEnter(event) {
        setMobile(event.target.value);
    }
    function cenrtificateEnter(event) {
        setCertificate(event.target.files[0]);
    }

    function addressEnter(event) {
        setAddress(event.target.value);
    }
    const iconstyle = {
        fontSize: "24px",

        marginTop: "8px",
        color: "#007bff"
    };
    const iconstyle1 = {
        fontSize: "30px",

        marginTop: "8px",
        color: "#007bff"
    };
    
    function btnClk(event) {
        
        event.preventDefault();
        setLoading(true);
        if (password !== confirmpassword) {
            alert("Password and Confirm Password must be the same");
            setPassword('');
            setConfirmPassword('');
            setLoading(false);
        } else {
            const form = new FormData();
            form.append("file", certificate);
            form.append("upload_preset", "bhavik-app");
            form.append("cloud_name", "dg1xa2wxc");
            console.log(form);
            // Make the fetch request to Cloudinary
            fetch("https://api.cloudinary.com/v1_1/dg1xa2wxc/image/upload", {
                method: "post",
                body:form
            })
            .then((res) => {
                if (!res.ok) {
                    
                    throw new Error(`HTTP error! Status: ${res.status}`);
                    
                }
                return res.json();
            })
            .then((data) => {
                setUrl(data.url);
                
                axios.post("https://backend-testing-1rgv.onrender.com/Company_register", {
                    Company_name: company,
                    Address: address,
                    Certificate: data.url, 
                    PassWord: password,
                    Verified: false,
                    Email: email,
                    Mobile_no: mobile,
                })
                .then((obj) => {
                    console.log(obj);
                    if (obj.data.error) {
                        
                        alert(obj.data.error);
                        
                    }
                    else{
                        alert("Please Wait for Verification, You will receive an email for Verification Status");
                        sendData("login");

                    }
                })
                .catch((err) => console.error(err)).finally(()=>{
                    setLoading(false);
                });
            })
            .catch((err) => {
                console.error(err);
                
            }).finally(()=>{
                setLoading(false);
            });
        }
    }
    
    return (<>
 <div className="mt-20"></div>
<div className="h-screen sm:mt-20 md:mt-10 lg:mt-0 overflow-y-auto">
    <label className="parent_label mt-10 sm:mt-20 md:mt-10 lg:mt-0 text-xl font-semibold flex justify-center  ml-10">Sign Up</label>
    <form onSubmit={btnClk} className="w-full max-w-md mx-auto">
        <div className="input-div flex items-center mt-5 w-full">
            <i className="fa fa-building-o text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx ml-5 flex-grow relative">
                <input type="text" required="required" onChange={companyEnter} value={company} className="input-field sm:w-32" />
                <span className="span-text">Company Name</span>
            </div>
        </div>
        
        <div className="input-div flex items-center  w-full">
            <i className="fa fa-address-card text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx ml-3 flex-grow relative">
                <textarea type="text" required="required" onChange={addressEnter} value={address} className="input-field sm:w-full"></textarea>
                <span className="span-text">Address</span>
            </div>
        
         </div>
        
        <div className="input-div flex items-center  w-full">
            <i className="fa fa-mobile text-gray-500 text-xl" aria-hidden="true" style={iconstyle1}></i>
            <div className="input-bx ml-7 flex-grow relative">
                <input type="tel" required="required" onChange={mobileEnter} value={mobile} pattern="[789][0-9]{9}" className="input-field" />
                <span className="span-text">Mobile No.</span>
            </div>
        </div>
        
        <div className="input-div flex items-center  w-full">
            <i className="fa fa-upload text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="ml-5 flex-grow relative">
                <span className="block mb-1 text-gray-700">Upload Company's Certificate</span>
                <input className="form-control w-full border border-black rounded-md py-2 px-4" type="file" onChange={cenrtificateEnter} required />
            </div>
        </div>
        
        <div className="input-div flex items-center w-full">
            <i className="fa fa-envelope text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx ml-5 flex-grow relative">
                <input type="email" required="required" onChange={emailenter} value={email} className="input-field" />
                <span className="span-text">Email Id</span>
            </div>
        </div>
        
        <div className="input-div flex items-center w-full">
            <i className="gg-password text-gray-500 text-xl" style={iconstyle}></i>
            <div className="input-bx ml-5 flex-grow relative">
                <input type="password" required="required" onChange={passwordenter} value={password} minLength={6} className="input-field" />
                <span className="span-text">Password</span>
            </div>
        </div>
        
        <div className="input-div flex items-center  w-full">
            <i className="gg-password text-gray-500 text-xl" style={iconstyle}></i>
            <div className="input-bx ml-5 flex-grow relative">
                <input type="password" required="required" onChange={confirmpasswordEnter} value={confirmpassword} minLength={6} className="input-field" />
                <span className="span-text">Confirm Password</span>
            </div>
        </div>
        
        <div className="flex justify-center mt-2 ml-10">
            <button type="submit" 
        disabled={loading}  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ fontFamily: "Poppins" }}> {loading ? 'Loading...' : 'Register'}</button>
        </div>
    </form>
</div>


    </>)
}