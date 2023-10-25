import React,{useState} from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
export default function Job_Seeker_Login_Componenet()
{
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    const history=useNavigate();
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
    const iconstyle = {
        fontSize: "24px",
        marginTop: "8px",
        color: "#007bff"
    };
    function btnclick(event)
    {
        event.preventDefault();
        console.log(email);
        console.log(password);
        try {
            axios.post("http://localhost:3000/jobber_login", {
                email: email, 
                pass: password
            }).then((obj)=>{
                if (obj.status == "201") {

                    alert("welcome")
                    window.localStorage.setItem("token", obj.data.data);
                    window.localStorage.setItem("email", email);
                    window.localStorage.setItem("type", "job_seeker");
                    //setPage("true");
                    history("/jobberdashboard");
                }
                else{
                    alert(obj.data.error);
                }
            }).catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            alert(error);
        }
    }
    return(<><div className="login-div">

    <label className="parent_label">Sign in</label>
    <form onSubmit={btnclick}>
        <div className="input-div">
            <i className="fa fa-envelope" style={iconstyle} ></i>
            <div className="input-bx" style={emailfield}>
                <input type="email" required="required" onChange={emailenter} value={email} />
                <span className="span-text">Email Id</span>
            </div>
        </div>

        <div className="input-div1">
            <i className="gg-password" style={iconstyle} ></i>
            <div className="input-bx" style={passwordfield}>
                <input type="password" required="required" onChange={passwordenter} minLength={6} value={password} />
                <span className="span-text">Password</span>
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <button type="submit" className="centered-button" style={{ marginTop: "20px", fontFamily: "Poppins" }}>Log In</button>
        </div>

    </form>
</div></>)
}