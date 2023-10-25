import React, { useEffect, useState } from "react";
import image from "../images/resume.avif";
import axios from "axios";
export default function ResumeBuilder(props) {
  const [objective, setObjective] = useState();
  var [skills, setSkills] = useState([]);
  var [cpi, setCpi] = useState();
  var [loading,setLoading]=useState(false);
  var [college, setCollege] = useState();
  var [graduation, setGraduation] = useState();
  var [location, setLocation] = useState();
  var [sdate,setSdate]=useState();
  var [edate,setEdate]=useState();
  var [hobbies,setHobbies]=useState();
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
    console.log(objective+" "+skills+" "+college+" "+cpi+" "+title+" "+description+" "+graduation+" "+sdate+" "+edate+" "+hobbies+" "+location)
    axios.post("http://localhost:3000/resume_details",{
      email:props.user.Email,
      objective:objective,
    mobile:props.user.mobile,
    Experince:props.user.Experince,
    cpi:cpi,
    college:college,
    GraduationYear:graduation,
    qualification:props.user.qualification,
    title:title,
    Description:description,
    Starting_date:sdate,
    Field:props.user.Field,
    skill:skills,
    Ending_date:edate,
    hobbies:hobbies,
    working_location:location
    }).then((data)=>{
      setLoading(false);
      props.setdata(true);
      console.log(data)
    }).catch((error)=>{
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
      <div className="card text-center" style={{ textAlign: "center", marginLeft: "260px", width: "700px", marginTop: "10px", marginBottom: "20px" }}>
        <img src={image} className="card-body" alt="jell" style={{ width: "400px", height: "400px", marginLeft: "150px" }} />
        <h1 style={{ fontFamily: "Poppins", color: "#007bff" }}>Please Enter Following Details</h1>
        <hr></hr>
        <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
          <i className="fa fa-file-text" aria-hidden="true" style={iconstyle}></i>
          <div className="input-bx" style={{ width: "460px", marginLeft: "19px" }}>
            <textarea type="text" required="required" onChange={ObjectiveEnter} value={objective} />
            <span className="span-text">Objective</span>
          </div>
        </div></li>

        <hr></hr>

        <button type="button" onClick={addSkill} className="centered-button" style={{ marginLeft: "136px", width: "460px" }}>
          Add Skill
        </button>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text" className="input-bx" style={{ marginLeft: "103px", marginTop: "10px", marginRight: "10px", padding: "10px", width: "360px" }}
              placeholder="Skill"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
            <button type="button" onClick={() => removeSkill(index)} className="centered-button" style={{ backgroundColor: "red" }}>
              Remove
            </button>
          </div>
        ))}
        <hr></hr>
        <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
          <i className="fa fa-university" aria-hidden="true" style={iconstyle}></i>
          <div className="input-bx" style={{ width: "460px", marginLeft: "19px" }}>
            <input type="text" required="required" onChange={EnterCollege} value={college} />
            <span className="span-text">College Name</span>
          </div>
        </div></li>

        <hr></hr>
        <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
          <i className="fa fa-certificate" aria-hidden="true" style={iconstyle}></i>
          <div className="input-bx" style={{ width: "460px", marginLeft: "27px" }}>
            <input type="number" required="required" onChange={Entercpi} value={cpi} min={0}  step={0.01}/>
            <span className="span-text">Cpi</span>
          </div>
        </div></li>

        <hr></hr>
        <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
          <i className="fa fa-graduation-cap" aria-hidden="true" style={iconstyle}></i>
          <div style={{
            width: "460px", marginLeft: "19px", border: "1px solid #000000",
            borderRadius: "5px",
            outline: "none"
          }}>
            <div style={{ marginTop: "10px" }}>
              <span style={{ marginTop: "40px", marginRight: "260px", color: "#007bff" }} className="span-text">Graduation Date</span>
            </div>
            <hr />
            <input type="date" required="required" onChange={EnterGraduation} value={graduation} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px" }} />


          </div>
        </div>
        </li>
        <hr />
        {
          props.user.Experience !="0" ? <div className="card" style={{ marginLeft: "0px", }}>
            <label className="parent_label" style={{ margin: "30px" }}>Experience</label>
            <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
              <i className="fa fa-header" aria-hidden="true" style={iconstyle}></i>
              <div style={{
                width: "460px", marginLeft: "19px", border: "1px solid #000000",
                borderRadius: "5px",
                outline: "none"
              }}>
                <div style={{ marginTop: "10px" }}>
                  <span style={{ marginTop: "40px", marginRight: "260px", color: "#007bff" }} className="span-text">What was your Title?</span>
                </div>
                <hr />
                <input type="text" required="required" onChange={Entertitle} value={title} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px", width: "440px" }} placeholder="Similar to Job Title thatbest describes the work you did." />


              </div>
            </div>
            </li>
            <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
              <i className="fa fa-header" aria-hidden="true" style={iconstyle}></i>
              <div style={{
                width: "460px", marginLeft: "19px", border: "1px solid #000000",
                borderRadius: "5px",
                outline: "none"
              }}>
                <div style={{ marginTop: "10px" }}>
                  <span style={{ marginTop: "40px", marginRight: "260px", color: "#007bff" }} className="span-text">Who Did you for this?</span>
                </div>
                <hr />
                <input type="text" required="required" onChange={Enterdescription} value={description} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px", width: "440px" }} placeholder="Person,Organization,or Family Business you Would." />


              </div>
            </div>
            </li>
            <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
              <i className="fa fa-map-marker" aria-hidden="true" style={iconstyle}></i>
              <div style={{
                width: "460px", marginLeft: "28px", border: "1px solid #000000",
                borderRadius: "5px",
                outline: "none"
              }}>
                <div style={{ marginTop: "10px" }}>
                  <span style={{ marginTop: "40px", marginRight: "350px", color: "#007bff" }} className="span-text">Location</span>
                </div>
                <hr />
                <input type="text" required="required" onChange={EnterLocation} value={location} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px", width: "440px" }} placeholder="e.g. Gujarat,India" />


              </div>
            </div>
            </li>
            <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
          <i className="fa fa-calendar" aria-hidden="true" style={iconstyle}></i>
          <div style={{
            width: "460px", marginLeft: "19px", border: "1px solid #000000",
            borderRadius: "5px",
            outline: "none"
          }}>
            <div style={{ marginTop: "10px" }}>
              <span style={{ marginTop: "40px", marginRight: "310px", color: "#007bff" }} className="span-text">Starting Date</span>
            </div>
            <hr />
            <input type="date" required="required" onChange={EnterSdate} value={sdate} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px" }} />


          </div>
        </div>
        </li>
        <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
          <i className="fa fa-calendar" aria-hidden="true" style={iconstyle}></i>
          <div style={{
            width: "460px", marginLeft: "19px", border: "1px solid #000000",
            borderRadius: "5px",
            outline: "none"
          }}>
            <div style={{ marginTop: "10px" }}>
              <span style={{ marginTop: "40px", marginRight: "310px", color: "#007bff" }} className="span-text">Ending Date</span>
            </div>
            <hr />
            <input type="date" required="required" onChange={EnterEdate} value={edate} className="input-bx" style={{ padding: "10px", border: "none", margin: "5px" }} />


          </div>
        </div>
        </li>

          </div> : <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
            <i className="fa fa-history" aria-hidden="true" style={iconstyle}></i>

            <div style={{
              width: "460px", marginLeft: "28px", border: "1px solid #000000",
              borderRadius: "5px",
              outline: "none", padding: "20px"
            }}><span className="span-text" style={{ marginRight: "260px" }}>Experience:-Fresher</span></div>

          </div></li>

        }
         <hr></hr>
        <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{}}>
          <i className="fa fa-magic" aria-hidden="true" style={iconstyle}></i>
          <div className="input-bx" style={{ width: "460px", marginLeft: "19px" }}>
            <input type="text" required="required" onChange={EnterHobbies} value={hobbies} />
            <span className="span-text">Hobbies</span>
          </div>
        </div></li>
        <button className="centered-button" style={{marginLeft:"270px",marginTop:"20px",marginBottom:"20px"}}>{loading==true?"Loading...":"Save"}</button>

      </div>
      </form>
    </>
  );
}
