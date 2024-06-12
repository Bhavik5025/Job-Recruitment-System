import React, { useState } from "react";
import axios from "axios";

export default function Job_Seeker_Registration({ sendData }) {
    var [name, setName] = useState('');
    var [email, setEmail] = useState('');
    var [address, setAddress] = useState('');
    var [mobile, setMobile] = useState('');
    var [password, setPassword] = useState('');
    var [loading, setLoading] = useState(false);
    var [confirmpassword, setConfirmPassword] = useState('');
    var [resume, setResume] = useState(null);
    var [experience, setExperience] = useState('');
    const [selectedOption, setSelectedOption] = useState('not selected');
    var [url, setUrl] = useState(false);
    var [image, setImage] = useState();
    const [selectedField, setSelectedField] = useState('not selected');
    const form = new FormData();
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleFieldChange = (e) => {
        setSelectedField(e.target.value);
    };
    function mobileEnter(event) {
        setMobile(event.target.value);
    }
    function addressEnter(event) {
        setAddress(event.target.value);
    }
    const emailfield = {
        marginLeft: "25px"
    }

    function ResumeEnter(event) {
        console.log(event.target.files[0]);
        setResume(event.target.files[0]);
        setUrl(true);

    }
    function ImageEnter(event) {
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);

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
    function nameEnter(event) {
        setName(event.target.value);
    }
    function passwordenter(event) {
        setPassword(event.target.value);

    }
    function confirmpasswordEnter(event) {
        setConfirmPassword(event.target.value);
    }
    function emailenter(event) {
        setEmail(event.target.value);
    }
    function ExperienceEnter(event) {
        setExperience(event.target.value);
    }

    function btnclick(event) {
        setLoading(true);
        event.preventDefault();
        if (selectedField == "not selected") {
            setLoading(false);
            alert("Please Select Graduation");
        }
        else if (selectedOption == "not selected") {
            setLoading(false);
            alert("Please Select Field")
        }
        else if (password != confirmpassword) {
            setLoading(false);
            alert("Password and Confirm password is not same");
            setPassword('');
            setConfirmPassword('');
        }
        // Check if an image is selected
        else {
            if (!image) {
                setLoading(false);
                alert("Please select an image");
                return;
            }

            // Upload the image to Cloudinary
            const imageForm = new FormData();
            imageForm.append("file", image);
            imageForm.append("upload_preset", "bhavik-app");
            imageForm.append("cloud_name", "dg1xa2wxc");

            fetch("https://api.cloudinary.com/v1_1/dg1xa2wxc/image/upload", {
                method: "post",
                body: imageForm
            })
                .then((imageResponse) => {
                    if (!imageResponse.ok) {
                        setLoading(false);
                        throw new Error(`Image upload HTTP error! Status: ${imageResponse.status}`);
                    }
                    return imageResponse.json();
                })
                .then((imageData) => {
                    const imageUrl = imageData.url;


                    if (!resume) {
                        saveUserData({ image: imageUrl });
                        return;
                    }

                    // Upload the resume to Cloudinary
                    const resumeForm = new FormData();
                    resumeForm.append("file", resume);
                    resumeForm.append("upload_preset", "bhavik-app");
                    resumeForm.append("cloud_name", "dg1xa2wxc");

                    return fetch("https://api.cloudinary.com/v1_1/dg1xa2wxc/image/upload", {
                        method: "post",
                        body: resumeForm
                    })
                        .then((resumeResponse) => {
                            if (!resumeResponse.ok) {
                                setLoading(false);
                                throw new Error(`Resume upload HTTP error! Status: ${resumeResponse.status}`);
                            }
                            return resumeResponse.json();
                        })
                        .then((resumeData) => {
                            const resumeUrl = resumeData.url;

                            saveUserData({ image: imageUrl, resume: resumeUrl });
                        });
                })
                .catch((error) => {
                    console.error(error);
                    setLoading(false);
                });
        }

    }

    function saveUserData(data) {
        axios.post("https://backend-testing-1rgv.onrender.com/job_seeker_data", {
            name: name,
            experience: experience,
            email: email,
            field: selectedOption,
            qualification: selectedField,
            image: data.image,
            resume: data.resume || "null",
            mobile: mobile,
            password: password,
            status: url
        })
            .then((obj) => {
                if (obj.data.error) {
                    setLoading(false);
                    alert(obj.data.error);
                } else {
                    setLoading(false);
                    alert("Congratulations! You are registered in the system successfully");
                    sendData("login");
                }
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }

    // ...

    return (<>
     <div className="mt-20"></div>
    <div className="h-screen sm:mt-20 md:mt-10 lg:mt-0 overflow-y-auto">
       
    <label className="parent_label mt-10 sm:mt-20 md:mt-30 lg:mt-10 text-xl font-semibold flex justify-center  ml-10">Sign Up</label> <form onSubmit={btnclick}>
        <div className="input-div flex items-center w-full">
                <i className="fa fa-user" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx ml-5 flex-grow relative" >
                    <input type="text" required="required" onChange={nameEnter} value={name} />
                    <span className="span-text">Name</span>
                </div>
            </div>
            <div className="input-div flex items-center w-full">
                <i className="fa fa-address-card" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx ml-3 flex-grow relative"  >
                    <textarea type="text" required="required" onChange={addressEnter} value={address} />
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
            {/* <div className="input-div">
                <i className="fa fa-upload" aria-hidden="true" style={iconstyle1}></i>

                <div className="mb-3"
                    style={{ marginLeft: "20px", border: "1px solid #000000", borderRadius: "5px" }}>
                    <span className="span-text" style={{ marginLeft: "10px", color: "#007bff" }}>Upload Your Passport Size Image</span>
                    <input className="form-control" type="file" onChange={ImageEnter} required/>
                </div>

            </div> */}
            <div className="input-div flex items-center  w-full">
                <i className="fa fa-upload text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
                <div className="ml-5 flex-grow relative">
                    <span className="block mb-1 text-gray-700">Upload Company's Certificate</span>
                    <input className="form-control w-full border border-black rounded-md py-2 px-4" type="file" onChange={ImageEnter} required />
                </div>
            </div>
            {/* <div className="input-div">
                <i className="fa fa-upload" aria-hidden="true" style={iconstyle1}></i>

                <div className="mb-3"
                    style={{ marginLeft: "20px", width: "370px", border: "1px solid #000000", borderRadius: "5px" }}>
                    <span className="span-text" style={{ marginLeft: "10px", color: "#007bff" }}>Upload Your Resume</span>
                    <input className="form-control" type="file" onChange={ResumeEnter} />
                </div>

            </div> */}
             <div className="input-div flex items-center  w-full">
            <i className="fa fa-upload text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="ml-5 flex-grow relative">
                <span className="block mb-1 text-gray-700">Upload Company's Certificate</span>
                <input className="form-control w-full border border-black rounded-md py-2 px-4" type="file" onChange={ResumeEnter} required />
            </div>
        </div>
        <div className="input-div flex items-center w-full">
                <i className="fa fa-envelope" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx ml-5 flex-grow relative" >
                    <input type="email" required="required" onChange={emailenter} value={email} />
                    <span className="span-text">Email Id</span>
                </div>
            </div>

            <div className="input-div flex items-center w-full">
                <i className="fa fa-graduation-cap" aria-hidden="true" style={iconstyle}></i>

                <select className="input-bx ml-5 flex-grow relative" value={selectedOption} onChange={handleOptionChange} style={{ height: "50px", borderColor: "#007bff", borderRadius: "5px"}} required>
                    <option value="not Selected">Please Select Field</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Chemical Engineering">Chemical Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="It Engineering">It Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Architecture Engineering">Architecture Engineering</option>
                    <option value="Automobile Engineering">Automobile Engineering</option>

                    <option value="Biomedical Engineering">Biomedical  Engineering</option>
                </select>

            </div>
            <div className="input-div flex items-center w-full">
                <i className="fa fa-graduation-cap" aria-hidden="true" style={iconstyle}></i>

                <select className="input-bx ml-5 flex-grow relative" value={selectedField} onChange={handleFieldChange} style={{ height: "50px", borderColor: "#007bff", borderRadius: "5px"}} required>
                    <option value="not Selected">Please Select Graduation</option>
                    <option value="Diploma">Diploma</option>

                    <option value="B.tech">B.tech/BE</option>

                    <option value="M.tech">M.Tech/ME</option>


                </select>
            </div>
            <div className="input-div flex items-center w-full">
                <i className="fa fa-history" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx ml-5 flex-grow relative">
                    <input type="number" required="required" onChange={ExperienceEnter} value={experience} min={0} />
                    <span className="span-text">Experience</span>
                </div>
            </div>
            <div className="input-div flex items-center w-full">
                <i className="gg-password" style={iconstyle} ></i>
                <div className="input-bx ml-5 flex-grow relative" >
                    <input type="password" required="required" onChange={passwordenter} value={password} minLength={6} />
                    <span className="span-text">Password</span>
                </div>
            </div>
            <div className="input-div flex items-center w-full">
                <i className="gg-password" style={iconstyle} ></i>
                <div className="input-bx ml-5 flex-grow relative" >
                    <input type="password" minLength={6} required="required" onChange={confirmpasswordEnter} value={confirmpassword} />
                    <span className="span-text">Confirm Password</span>
                </div>
            </div>
            <div className="flex justify-center mt-2 ml-10">
            <button type="submit" 
        disabled={loading}  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ fontFamily: "Poppins" }}> {loading ? 'Loading...' : 'Register'}</button>
        </div>
        </form>
    </div></>)
}