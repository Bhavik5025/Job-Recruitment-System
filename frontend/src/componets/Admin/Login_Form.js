import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login_Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const navigate = useNavigate();

    const iconstyle = {
        fontSize: "24px",
        marginTop: "8px",
        color: "#007bff"
    };

    const emailfield = {
        marginLeft: "19px"
    };

    const passwordfield = {
        marginLeft: "19px"
    };

    const buttonstyle = {
        width: "100px",
        marginTop: "20px",
        backgroundColor: "#007bff",
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#fff"
    };

    function emailenter(event) {
        setEmail(event.target.value);
    }

    function passwordenter(event) {
        setPassword(event.target.value);
    }

    function submitbtn(event) {
        event.preventDefault();
        setLoading(true); // Set loading to true when form is submitted
        if (email === "bhavik5025@gmail.com" && password === "123456") {
            axios.post("https://backend-testing-1rgv.onrender.com/login", {
                email: email
            }).then((obj) => {
                console.log(obj.status);
                console.log(obj.data);
                if (obj.status === 201) {
                    alert("welcome");
                    window.localStorage.setItem("token", obj.data.data);
                    window.localStorage.setItem("email", email);
                    window.localStorage.setItem("type", "admin");
                    navigate("/admindashboard");
                } else {
                    alert("error");
                }
            }).catch((error) => {
                alert("error");
                console.error('Error:', error);
            }).finally(() => {
                setLoading(false); // Set loading to false after request is completed
            });
        } else {
            alert("error");
            setEmail('');
            setPassword('');
            setLoading(false); // Set loading to false if validation fails
        }
    }

    return (
        <>
            <div className="d-flex flex-col items-center justify-center mx-auto">
                <label className="parent_label ml-10">Sign in</label>
                <form onSubmit={submitbtn}>
                    <div className="input-div">
                        <i className="fa fa-mobile-phone ml-3" style={iconstyle}></i>
                        <div className="input-bx ml-5" style={emailfield}>
                            <input type="email" required onChange={emailenter} value={email} />
                            <span className="span-text">Email Id</span>
                        </div>
                    </div>

                    <div className="input-div">
                        <i className="gg-password" style={iconstyle}></i>
                        <div className="input-bx ml-10" style={passwordfield}>
                            <input type="password" required onChange={passwordenter} value={password} />
                            <span className="span-text">Password</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="centered-button ml-10 mt-4" style={{ fontFamily: "Poppins" }} disabled={loading}>
                            {loading ? "Loading..." : "Log In"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
