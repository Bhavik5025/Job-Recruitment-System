import React, { useState } from "react";
import image from "../images/vacancies.webp"
import axios from "axios";
export default function NewVacancies() {
    var [jobdescription, setJobdescription] = useState();
    var [experience, setExperience] = useState();
    var [number, setNumber] = useState();
    var [packages, setPackage] = useState();
    const [selectedOption, setSelectedOption] = useState('not selected');
    const [selectedField, setSelectedField] = useState('not selected');

    var [loading, setLoading] = useState();
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleFieldChange = (e) => {
        setSelectedField(e.target.value);
    };
    const iconstyle = {
        fontSize: "24px",
        marginTop: "8px",
        color: "#007bff"
    };
    const emailfield = {

    }
    function DescriptionEnter(event) {
        setJobdescription(event.target.value);
    }
    function ExperienceEnter(event) {
        setExperience(event.target.value);
    }
    function NumberEnter(event) {
        setNumber(event.target.value);
    }
    function PackageEnter(event) {
        setPackage(event.target.value);
    }
    function btnclick(event) {
        setLoading(true);
        event.preventDefault();
        console.log(selectedField);
        console.log(selectedOption);

        if (selectedOption == "not selected" && selectedField == "not selected") {
            setLoading(false);
            alert("Please fill all Details First...")
        }
        else {
            axios.post("https://backend-testing-1rgv.onrender.com/add_vacancy", {
                email: window.localStorage.getItem("email"),
                Experience: experience,
                job_description: jobdescription,
                package: packages,
                qualification: selectedField,
                number_of_places: number,
                Field: selectedOption
            }).then((obj) => {
                if (obj.data.data == "success") {
                    setJobdescription('');
                    setExperience('');
                    setNumber('');
                    setPackage('');
                    setSelectedField('not selected');
                    setSelectedOption('not selected');
                    setLoading(false);
                    alert("Vacancy added SuccessFully...");
                }
                else {
                    setLoading(false)
                    alert(obj.data.data);
                }
            }).catch((error) => {
                setLoading(false);
                console.log(error);
            })
        }
    }
    return (<>
        <div className="flex items-center justify-center min-h-screen">
            <div className="shadow-lg p-3 mb-5 bg-white rounded card-body text-center">
                <img src={image} className=" mx-auto mb-4" alt="jell" />
                <form onSubmit={btnclick}>
                    <hr></hr>
                    <li className="list-group-item" style={{ margin: "10px" }}> <div className="input-div2 flex items-center  w-full pr-5 pl-1">
                        <i className="fa fa-file-text ml-2 text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
                        <div className="ml-5 flex-grow relative">
                            <div className="input-bx w-full" style={emailfield}>
                                <textarea type="text" required="required" onChange={DescriptionEnter} value={jobdescription} />
                                <span className="span-text">Description</span>
                            </div>
                        </div>
                    </div></li>

                    <hr></hr>

                    <li className="list-group-item" style={{ margin: "10px" }}> <div className="input-div2 flex items-center  w-full pr-5 pl-1">
                        <i className="fa fa-history  ml-2 text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
                        <div className="ml-5 flex-grow relative">
                            <div className="input-bx w-full" style={emailfield}>
                                <input type="number" required="required" onChange={ExperienceEnter} value={experience} min={0} />
                                <span className="span-text">Experience</span>
                            </div>
                        </div>
                    </div></li>

                    <hr></hr>
                    {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
                        <i className="fa fa-user" aria-hidden="true" style={iconstyle}></i>
                        <div className="input-bx" style={emailfield}>
                            <input type="number" required="required" onChange={NumberEnter} value={number} min={1} />
                            <span className="span-text">Number of Vacancies</span>
                        </div>
                    </div></li> */}
  <li className="list-group-item" style={{ margin: "10px" }}> <div className="input-div2 flex items-center  w-full pr-5 pl-1">
                        <i className="fa fa-user  ml-2 text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
                        <div className="ml-5 flex-grow relative">
                            <div className="input-bx w-full" style={emailfield}>
                            <input type="number" required="required" onChange={NumberEnter} value={number} min={1} />
                            <span className="span-text">Number of Vacancies</span>
                            </div>
                        </div>
                    </div></li>
                    <hr />
                    {/* <li className="list-group-item" style={{ margin: "10px" }}> <div className="input-div2 flex items-center  w-full pr-5 pl-1">
               
                        <i className="fa fa-cog" aria-hidden="true" style={iconstyle}></i>
                        <div className="ml-5 flex-grow relative">
                            <select className="input-bx w-full" value={selectedOption} onChange={handleOptionChange} style={{ height: "50px", borderColor: "#007bff", borderRadius: "5px" }} required>
                                <option value="not Selected">Not Selected</option>
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
                    </div></li> */}
                  <li className="list-group-item" style={{ margin: "10px" }}>
  <div className="input-div2 flex items-center w-full pr-5 pl-1" style={{width:"300px"}}>
    <i className="fa fa-cog ml-2 text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
    <div className="ml-5 flex-grow relative">
      <div className="input-bx w-full" style={emailfield}>
        <select
          value={selectedOption}
          onChange={handleOptionChange}
          className="h-12 px-4 border border-gray-300 rounded-lg w-full md:w-auto"
          style={{ borderColor: "#007bff" }}
          required
        >
          <option value="not Selected">Not Selected</option>
          <option value="Computer Engineering">Computer Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Chemical Engineering">Chemical Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="It Engineering">It Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Architecture Engineering">Architecture Engineering</option>
          <option value="Automobile Engineering">Automobile Engineering</option>
          <option value="Biomedical Engineering">Biomedical Engineering</option>
        </select>
      </div>
    </div>
  </div>
</li>

                    <hr />
                    {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
                        <i className="fa fa-inr" aria-hidden="true" style={iconstyle}></i>
                        <div className="input-bx" style={{}}>
                            <input type="number" required="required" onChange={PackageEnter} value={packages} min={0} />
                            <span className="span-text">Package</span>
                        </div>
                    </div></li> */}
                    <li className="list-group-item" style={{ margin: "10px" }}> <div className="input-div2 flex items-center  w-full pr-5 pl-1">
                        <i className="fa fa-inr  ml-2 text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
                        <div className="ml-5 flex-grow relative">
                            <div className="input-bx w-full" style={emailfield}>
                            <input type="number" required="required" onChange={PackageEnter} value={packages} min={0} />
                            <span className="span-text">Package</span>
                            </div>
                        </div>
                    </div></li>
                    <hr />
                    {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
                        <i className="fa fa-graduation-cap" aria-hidden="true" style={iconstyle}></i>
                        <div className="input-bx" style={{ marginLeft: "10px", }}>
                            <select className="input-bx" value={selectedField} onChange={handleFieldChange} style={{ height: "50px", borderColor: "#007bff", borderRadius: "5px" }} required>
                                <option value="not Selected">Not Selected</option>
                                <option value="Diploma">Diploma</option>

                                <option value="B.tech">B.tech/BE</option>

                                <option value="M.tech">M.Tech/ME</option>


                            </select>
                        </div>
                    </div></li> */}
                    <li className="list-group-item" style={{ margin: "10px" }}>
  <div className="input-div2 flex items-center w-full pr-5 pl-1"  style={{width:"300px"}}>
    <i className="fa fa-graduation-cap  text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
    <div className="ml-5 flex-grow relative" >
      <div className="input-bx w-full" style={emailfield}>
        <select 
           value={selectedField} onChange={handleFieldChange}
          className="h-12 px-4 border border-gray-300 rounded-lg w-full md:w-auto"
          style={{ borderColor: "#007bff" }}
          required
        >
             <option value="not Selected">Not Selected</option>
                                <option value="Diploma">Diploma</option>

                                <option value="B.tech">B.tech/BE</option>

                                <option value="M.tech">M.Tech/ME</option>

        </select>
        </div>
    </div>
  </div>
</li>
<li className="list-group-item" style={{ margin: "10px" }}>
  <div className="input-div2 flex justify-center"> {/* Use flex and justify-center classes */}
    <div> {/* Wrap the button inside a div */}
      <button
        type="submit"
        className="centered-button"
        style={{ marginTop: "20px", fontFamily: "Poppins" }}
      >
        {loading ? "Loading..." : "Save"} {/* Simplified ternary operator */}
      </button>
    </div>
  </div>
</li>

                </form>
            </div>
        </div>
    </>)
}