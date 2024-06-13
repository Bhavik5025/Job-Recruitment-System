import React, { useEffect, useState } from "react";
import image from "../images/resume.avif";
import axios from "axios";
export default function ResumeBuilder(props) {
  const [objective, setObjective] = useState();
  var [skills, setSkills] = useState([]);
  var [cpi, setCpi] = useState();
  var [loading, setLoading] = useState(false);
  var [college, setCollege] = useState();
  var [graduation, setGraduation] = useState();
  var [location, setLocation] = useState();
  var [sdate, setSdate] = useState();
  var [edate, setEdate] = useState();
  var [hobbies, setHobbies] = useState();
  useEffect(() => {
    console.log(props.user.Experience)
  })
  const [resumeData, setResumeData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    objective: "",
    education: [],
    workExperience: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
    hobbies: "",
    references: "",
  });
  const emailfield = {
    marginLeft: "19px"
  }
  function ObjectiveEnter(event) {
    setObjective(event.target.value);
  }
  function EnterSdate(event) {
    setSdate(event.target.value);
  }
  function EnterEdate(event) {
    setEdate(event.target.value);
  }
  function Entercpi(event) {
    setCpi(event.target.value);
  }
  function EnterLocation(event) {
    setLocation(event.target.value);
  }
  function EnterCollege(event) {
    setCollege(event.target.value);
  }
  function EnterGraduation(event) {
    setGraduation(event.target.value);
  }
  function EnterHobbies(event) {
    setHobbies(event.target.value);
  }

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    // Send resumeData to your server or perform any desired actions
    console.log(objective + " " + skills + " " + college + " " + cpi + " " + title + " " + description + " " + graduation + " " + sdate + " " + edate + " " + hobbies + " " + location)
    axios.post("https://backend-testing-1rgv.onrender.com/resume_details", {
      email: props.user.Email,
      objective: objective,
      mobile: props.user.mobile,
      Experince: props.user.Experince,
      cpi: cpi,
      college: college,
      GraduationYear: graduation,
      qualification: props.user.qualification,
      title: title,
      Description: description,
      Starting_date: sdate,
      Field: props.user.Field,
      skill: skills,
      Ending_date: edate,
      hobbies: hobbies,
      working_location: location
    }).then((data) => {
      setLoading(false);
      props.setdata(true);
      console.log(data)
    }).catch((error) => {
      setLoading(false);
      console.log(error);
    })
  };
  const iconstyle = {
    fontSize: "24px",
    marginTop: "8px",
    color: "#007bff"
  };

  function handleSkillChange(index, skillValue) {
    const updatedSkills = [...skills];
    updatedSkills[index] = skillValue;
    setSkills(updatedSkills);
  }

  function removeSkill(index) {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  }

  function addSkill() {
    setSkills([...skills, ""]);
  }
  var [title, setTitle] = useState();
  var [description, setDescription] = useState();

  function Entertitle(event) {
    setTitle(event.target.value);
  }

  function Enterdescription(event) {
    setDescription(event.target.value);
  }
  return (
    <><form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="shadow-lg p-3 mb-5 bg-white rounded card-body text-center">
          <img src={image} alt="Company Image" className="w-72 max-w-full h-auto mx-auto mb-4 justify-center" />
          <h1 className="parent_label text-2xl font-bold mb-4 mt-10 ml-5 sm:ml-0 lg:ml-0 md:ml-0" style={{ fontFamily: "Poppins", color: "#007bff" }}>
  Please Enter Following Details
</h1>
 <hr></hr>
          {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
          <i className="fa fa-file-text" aria-hidden="true" style={iconstyle}></i>
          <div className="input-bx" style={{ width: "460px", marginLeft: "19px" }}>
            <textarea type="text" required="required" onChange={ObjectiveEnter} value={objective} />
            <span className="span-text">Objective</span>
          </div>
        </div></li> */}
          <div className="input-div flex items-center  w-full">
            <i className="fa fa-address-card text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx ml-3 flex-grow relative">
              <textarea type="text" required="required" onChange={ObjectiveEnter} value={objective} />
              <span className="span-text">Objective</span>

            </div>

          </div>

          <hr></hr>

          {/* <button type="button" onClick={addSkill} className="centered-button" >
            Add Skill
          </button> */}
            <div className="input-div flex items-center  w-full">
         
            <div className="input-bx ml-3 flex-grow relative">
            <button type="button" onClick={addSkill} className="centered-button" >
            Add Skill
          </button>
            </div>

          </div>
 
          {skills.map((skill, index) => (
            <div key={index}>
              <input
                type="text" className="input-bx" style={{  marginTop: "10px", marginRight: "10px", padding: "10px",border:"1px solid" }}
                placeholder="Skill"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
              />
              <button type="button" onClick={() => removeSkill(index)}   className=" mt-0 sm:mt-2 lg:mt-0 md:mt-0 text-red">
              <i className="fa fa-trash text-red-500 text-xl" aria-hidden="true" ></i>
              </button>
            </div>
          ))}
          <hr></hr>
          {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
          <i className="fa fa-university" aria-hidden="true" style={iconstyle}></i>
          <div className="input-bx" style={{ width: "460px", marginLeft: "19px" }}>
            <input type="text" required="required" onChange={EnterCollege} value={college} />
            <span className="span-text">College Name</span>
          </div>
        </div></li> */}

          <div className="input-div flex items-center  w-full">
            <i className="fa fa-university text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx ml-2 flex-grow relative">
              <input type="text" required="required" onChange={EnterCollege} value={college} />
              <span className="span-text">College Name</span>
            </div>

          </div>


          <hr></hr>
          {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
          <i className="fa fa-certificate" aria-hidden="true" style={iconstyle}></i>
          <div className="input-bx" style={{ width: "460px", marginLeft: "27px" }}>
            <input type="number" required="required" onChange={Entercpi} value={cpi} min={0}  step={0.01}/>
            <span className="span-text">Cpi</span>
          </div>
        </div></li> */}

          <div className="input-div flex items-center  w-full">
            <i className="fa fa-certificate text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx ml-3 flex-grow relative">
              <input type="number" required="required" onChange={Entercpi} value={cpi} min={0} step={0.01} />
              <span className="span-text">Cpi</span>
            </div>

          </div>


          <hr></hr>
          {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
            <i className="fa fa-graduation-cap" aria-hidden="true" style={iconstyle}></i>
            <div style={{
              width: "460px", marginLeft: "19px", border: "1px solid #000000",
              borderRadius: "5px",
              outline: "none"
            }}>
              <div style={{ marginTop: "10px" }}>
                <span style={{ marginTop: "40px", color: "#007bff" }} className="span-text">Graduation Date</span>
              </div>
              <hr />
              <input type="date" required="required" onChange={EnterGraduation} value={graduation} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px" }} />


            </div>
          </div>
          </li>
           */}
          
                   <div className="input-div flex items-center  w-full">
                    
            <i className="fa fa-graduation-cap text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="flex-grow relative " style={{fontFamily:"Poppins",border:"1px solid"}}>
            <span className="block mb-1 text-gray-700 justify-start">Graduation Date</span>
                <input type="date" required="required"  onChange={EnterGraduation} value={graduation} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px" }} />
       </div>
        </div>
          <hr />
      
          {
            props.user.Experience != "0" ? <div className=" " style={{marginLeft: "0px", }}>
              <label className="parent_label" style={{  }}>Experience</label>
              <br></br>
              {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div" style={{}}>
                <i className="fa fa-header" aria-hidden="true" style={iconstyle}></i>
                <div style={{
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  outline: "none"
                }}>
                  <div style={{ marginTop: "10px" }}>
                    <span style={{ marginTop: "40px", color: "#007bff" }} className="span-text">What was your Title?</span>
                  </div>
                  <hr />
                  <input type="text" required="required" onChange={Entertitle} value={title} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px", width: "440px" }} placeholder="Similar to Job Title thatbest describes the work you did." />


                </div>
              </div>
              </li> */}
              <div className="input-div flex items-center  w-full">
            <i className="fa fa-header text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx ml-2 flex-grow relative">
            <input type="text" required="required" onChange={Entertitle} value={title} className="" style={{ padding: "40px 10px 10px 40px"  }} placeholder="Similar to Job Title that best describes the work you did." />

              <span className="span-text ">What was your Title?</span>
            </div>

          </div>

              {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div" style={{}}>
                <i className="fa fa-header" aria-hidden="true" style={iconstyle}></i>
                <div style={{
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  outline: "none"
                }}>
                  <div style={{ marginTop: "10px" }}>
                    <span style={{ marginTop: "40px", color: "#007bff" }} className="span-text">Who Did you for this?</span>
                  </div>
                  <hr />
                  <input type="text" required="required" onChange={Enterdescription} value={description} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px", width: "440px" }} placeholder="Person,Organization,or Family Business you Would." />


                </div>
              </div>
              </li> */}
              <div className="input-div flex items-center  w-full">
            <i className="fa fa-header text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx ml-2 flex-grow relative">
            <input type="text" required="required" onChange={Enterdescription} value={description}  style={{ padding:  "40px 10px 10px 40px",  }} placeholder="Person,Organization,or Family Business you Would." />

              <span className="span-text ">Who Did you for this?</span>
            </div>

          </div>
              {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div" style={{}}>
                <i className="fa fa-map-marker" aria-hidden="true" style={iconstyle}></i>
                <div style={{
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  outline: "none"
                }}>
                  <div style={{ marginTop: "10px" }}>
                    <span style={{ marginTop: "40px", color: "#007bff" }} className="span-text">Location</span>
                  </div>
                  <hr />
                  <input type="text" required="required" onChange={EnterLocation} value={location} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px", width: "440px" }} placeholder="e.g. Gujarat,India" />


                </div>
              </div>
              </li> */}
               <div className="input-div flex items-center  w-full">
            <i className="fa fa-map-marker text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx ml-5 flex-grow relative">
            <input type="text" required="required" onChange={EnterLocation} value={location}   style={{ padding: "40px 10px 10px 40px" }} placeholder="e.g. Gujarat,India" />

              <span className="span-text ">Location</span>
            </div>

          </div>
              {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div" style={{}}>
                <i className="fa fa-calendar" aria-hidden="true" style={iconstyle}></i>
                <div style={{
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  outline: "none"
                }}>
                  <div style={{ marginTop: "10px" }}>
                    <span style={{ marginTop: "40px", color: "#007bff" }} className="span-text">Starting Date</span>
                  </div>
                  <hr />
                  <input type="date" required="required" onChange={EnterSdate} value={sdate} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px" }} />


                </div>
              </div>
              </li> */}
                <div className="input-div flex items-center  w-full">
                    
                    <i className="fa fa-calendar text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
                    <div className="flex-grow relative ml-3 " style={{fontFamily:"Poppins",border:"1px solid"}}>
                    <span className="block mb-1 text-gray-700 justify-start">Starting Date</span>
                        <input type="date" required="required" onChange={EnterSdate} value={sdate}className="input-bx" style={{ padding: "10px", border: "none", margin: "5px" }} />
               </div>
                </div>
              {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div" style={{}}>
                <i className="fa fa-calendar" aria-hidden="true" style={iconstyle}></i>
                <div style={{
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  outline: "none"
                }}>
                  <div style={{ marginTop: "10px" }}>
                    <span style={{ marginTop: "40px", color: "#007bff" }} className="span-text">Ending Date</span>
                  </div>
                  <hr />
                  <input type="date" required="required" onChange={EnterEdate} value={edate} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px" }} />


                </div>
              </div>
              </li> */}
<div className="input-div flex items-center  w-full">
                    
                    <i className="fa fa-calendar text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
                    <div className="flex-grow relative ml-3 " style={{fontFamily:"Poppins",border:"1px solid"}}>
                    <span className="block mb-1 text-gray-700 justify-start">Ending Date</span>
                        <input type="date" required="required" onChange={EnterEdate} value={edate} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px" }} />
               </div>
                </div>
            </div> :   <div className="input-div flex items-center  w-full">
                    
            <i className="fafa-graduation-cap text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="ml-5 flex-grow relative">
            <span className="block mb-1 text-gray-700 justify-start">Experience - Fresher</span>
       </div>
        </div>

          }
          <hr></hr>
          {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div" style={{}}>
            <i className="fa fa-magic" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx" style={{}}>
              <input type="text" required="required" onChange={EnterHobbies} value={hobbies} />
              <span className="span-text">Hobbies</span>
            </div>
          </div></li> */}
    <div className="input-div flex items-center  w-full">
            <i className="fa fa-magic text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="input-bx ml-3 flex-grow relative">
            <input type="text" required="required" onChange={EnterHobbies} value={hobbies} />
              <span className="span-text">Hobbies</span>
            </div>

          </div>

          <button className="centered-button" style={{ marginTop: "20px", marginBottom: "20px" }}>{loading == true ? "Loading..." : "Save"}</button>

        </div>
      </div>
    </form>
    </>
  );
}
