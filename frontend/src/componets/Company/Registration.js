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
    const emailfield = {
        marginLeft: "19px"
    }
    const passwordfield = {
        marginLeft: "33px"
    }
    const buttonstyle = {
        width: "100px",
        marginTop: "20px",
        backgroundColor: "#007bff",
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#fff"
    }
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
    
        if (password !== confirmpassword) {
            alert("Password and Confirm Password must be the same");
            setPassword('');
            setConfirmPassword('');
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
                .catch((err) => console.error(err));
            })
            .catch((err) => {
                console.error(err);
                
            });
        }
    }
    
    return (<div className="login-div">
        <label className="parent_label">Sign Up</label>
        <form onSubmit={btnClk}>
            <div className="input-div">
                <i className="fa fa-building-o" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx" style={emailfield}>
                    <input type="text" required="required" onChange={companyEnter} value={company} />
                    <span className="span-text">Company Name</span>
                </div>
            </div>
            <div className="input-div2">
                <i className="fa fa-address-card" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx" style={emailfield}>
                    <textarea type="text" required="required" onChange={addressEnter} value={address} />
                    <span className="span-text">Address</span>
                </div>
            </div>
            <div className="input-div3">
                <i className="fa fa-mobile" aria-hidden="true" style={iconstyle1}></i>
                <div className="input-bx" style={emailfield}>
                    <input type="tel" required="required" onChange={mobileEnter} value={mobile} pattern="[789][0-9]{9}" />
                    <span className="span-text">Mobile No.</span>
                </div>
            </div>
            <div className="input-div">
                <i className="fa fa-upload" aria-hidden="true" style={iconstyle}></i>

                <div className="mb-3"
                    style={{ marginLeft: "20px", width: "370px", border: "1px solid #000000", borderRadius: "5px" }}>
                    <span className="span-text" style={{ marginLeft: "10px", color: "#007bff" }}>Upload Company's Certificate</span>
                    <input className="form-control" type="file" onChange={cenrtificateEnter} required />
                </div>

            </div>
            <div className="input-div">
                <i className="fa fa-envelope" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx" style={emailfield}>
                    <input type="email" required="required" onChange={emailenter} value={email} />
                    <span className="span-text">Email Id</span>
                </div>
            </div>
            <div className="input-div1">
                <i className="gg-password" style={iconstyle} ></i>
                <div className="input-bx" style={passwordfield}>
                    <input type="password" required="required" onChange={passwordenter} value={password} minLength={6}/>
                    <span className="span-text">Password</span>
                </div>
            </div>
            <div className="input-div1">
                <i className="gg-password" style={iconstyle} ></i>
                <div className="input-bx" style={passwordfield}>
                    <input type="password" minLength={6} required="required" onChange={confirmpasswordEnter} value={confirmpassword} />
                    <span className="span-text">Confirm Password</span>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="centered-button" style={{ marginTop: "20px", fontFamily: "Poppins" }}>Register</button>
            </div>
        </form>
    </div>)
}