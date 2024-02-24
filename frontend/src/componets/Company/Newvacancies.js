import React,{useState} from "react";
import image from "../images/vacancies.webp"
import axios from "axios";
export default function NewVacancies()
{
    var [jobdescription,setJobdescription]=useState();
    var [experience,setExperience]=useState();
    var [number,setNumber]=useState();
    var [packages,setPackage]=useState();
    const [selectedOption, setSelectedOption] = useState('not selected');
    const [selectedField, setSelectedField] = useState('not selected');

    var [loading,setLoading]=useState();
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
        marginLeft: "19px",
        width:"500px"
    }
    function DescriptionEnter(event)
    {
        setJobdescription(event.target.value);
    }
    function ExperienceEnter(event)
    {
        setExperience(event.target.value);
    }
    function NumberEnter(event)
    {
        setNumber(event.target.value);
    }
    function PackageEnter(event)
    {
        setPackage(event.target.value);
    }
    function btnclick(event)
    {
        setLoading(true);
        event.preventDefault();
        console.log(selectedField);
        console.log(selectedOption);

        if(selectedOption=="not selected" && selectedField=="not selected")
        {
            setLoading(false);
            alert("Please fill all Details First...")
        }
        else{
            axios.post("https://backend-testing-1rgv.onrender.com/add_vacancy",{
                email:window.localStorage.getItem("email"),
                Experience:experience,
                job_description:jobdescription,
                package:packages,
                qualification:selectedField,
                number_of_places:number,
                Field:selectedOption
            }).then((obj)=>{
                if(obj.data.data=="success")
                {
                    setJobdescription('');
                    setExperience('');
                    setNumber('');
                    setPackage('');
                    setSelectedField('not selected');
                    setSelectedOption('not selected');
                    setLoading(false);
                    alert("Vacancy added SuccessFully...");
                }
                else{
                    setLoading(false)
                    alert(obj.data.data);
                }
            }).catch((error)=>{
                setLoading(false);
                console.log(error);
            })
        }
    }
    return(<>  <img src={image} className="card-img-top" alt="jell" style={{ width: "400px", height: "300px" }} />
    <form onSubmit ={btnclick}>
       <hr></hr>
            <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{ }}>
                <i className="fa fa-file-text" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx" style={emailfield}>
                    <textarea type="text" required="required" onChange={DescriptionEnter} value={jobdescription} />
                    <span className="span-text">Job Description</span>
                </div>
            </div></li>
            
        <hr></hr>
        <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{ }}>
                <i className="fa fa-history" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx" style={emailfield}>
                    <input type="number" required="required" onChange={ExperienceEnter} value={experience} min={0} />
                    <span className="span-text">Experience</span>
                </div>
            </div></li>
            
        <hr></hr>
        <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{ }}>
                <i className="fa fa-user" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx" style={emailfield}>
                    <input type="number" required="required" onChange={NumberEnter} value={number} min={1} />
                    <span className="span-text">Number of Vacancies</span>
                </div>
            </div></li>
    <hr/>
    <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{ }}>
                <i className="fa fa-cog" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx" style={emailfield}>
                <select className="input-bx" value={selectedOption} onChange={handleOptionChange} style={{height:"50px",borderColor:"#007bff",borderRadius: "5px",width:"500px"}} required>
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
            </div></li>
<hr/>
            <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{ }}>
                <i className="fa fa-inr" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx" style={{marginLeft:"26px",width:"500px"}}>
                    <input type="number" required="required" onChange={PackageEnter} value={packages} min={0} />
                    <span className="span-text">Package</span>
                </div>
            </div></li>
            <hr/>
            <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{ }}>
                <i className="fa fa-graduation-cap" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx" style={{marginLeft:"10px",}}>
                <select className="input-bx" value={selectedField} onChange={handleFieldChange} style={{height:"50px",borderColor:"#007bff",borderRadius: "5px",width:"500px"}} required>
        <option value="not Selected">Not Selected</option>
        <option value="Diploma">Diploma</option>
        
        <option value="B.tech">B.tech/BE</option>
        
        <option value="M.tech">M.Tech/ME</option>
        
        
      </select>
                </div>
            </div></li>
            <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" style={{ marginLeft: "260px" }}>
            <div className="d-flex justify-content-center">
                <button type="submit" className="centered-button" style={{ marginTop: "20px", fontFamily: "Poppins" }}>{loading==true?"Loading...":"Save"}</button>
            </div>
            </div></li>
    </form>
    </>)
}