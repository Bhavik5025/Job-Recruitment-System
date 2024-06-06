import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
export default function Login_Form() {
    var [email, setEmail] = useState('');
    var [Page, setPage] = useState('');
    var [password, setPassword] = useState('');
    const history = useNavigate();
    const iconstyle = {
        fontSize: "24px",
        marginTop: "8px",
        color: "#007bff"
    };
    const emailfield = {
        marginLeft: "19px"
    }
    const passwordfield = {
        marginLeft: "19px"
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
    function submitbtn(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
        if (email === "bhavik5025@gmail.com" && password === "123456") {
            axios.post("https://backend-testing-1rgv.onrender.com/login", {
                email: email

            }).then((obj) => {
                console.log(obj.status);
                console.log(obj.data);
                if (obj.status == "201") {

                    alert("welcome")
                    window.localStorage.setItem("token", obj.data.data);
                    window.localStorage.setItem("email", email);
                    window.localStorage.setItem("type", "admin");
                    setPage("true");
                    history("/admindashboard");
                }
                else {
                    alert("error");
                }

            })
        }
        else {
            alert("error");
            setEmail('');
            setPassword('');
        }

    };


    return (<>
  <div className="justify-content-center">
            <label className="parent_label">Sign in</label>
            <form onSubmit={submitbtn}>
                <div className="input-div">
                    <i className="fa fa-mobile-phone" style={iconstyle}></i>
                    <div className="input-bx" style={emailfield}>
                        <input type="email" required onChange={emailenter} value={email} />
                        <span className="span-text">Email Id</span>
                    </div>
                </div>

                <div className="input-div1">
                    <i className="gg-password" style={iconstyle}></i>
                    <div className="input-bx" style={passwordfield}>
                        <input type="password" required onChange={passwordenter} value={password} />
                        <span className="span-text">Password</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="centered-button ml-20 mt-2" style={{ fontFamily: "Poppins" }}>Log In</button>
                </div>
            </form>
        </div>
    </>
    )
}