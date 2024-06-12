import React, { useEffect, useState } from "react";
import image from '../images/company_image.jpg';

import axios from "axios";
export default function Company_profile({visible}) {
    const em = window.localStorage.getItem("email");
    var [description, setDescription] = useState('');
    var [logo, setLogo] = useState();
    var [loading,setLoading]=useState();
    var [logourl,setLogourl]=useState();
    var [imagesurl,setImagesurl]=useState([]);
    var [images, setImages] = useState([]);
    var [openingtime,setOpeningtime]=useState();
    var [closingtime,setClosingtime]=useState();
    const [user, setUserData] = useState({ Data: [] });
    const iconstyle = {
        fontSize: "24px",
        marginTop: "8px",
        color: "#007bff"
    };
    const emailfield = {
      
    }
    useEffect(() => {
        axios.post("https://backend-testing-1rgv.onrender.com/company_details", {
            email: em
        })
            .then((response) => {
                setUserData(response.data.Data);
                console.log(response.data.Data);

            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);
    function DescriptionEnter(event) {
        setDescription(event.target.value);
    }
    function logoEnter(event) {
        setLogo(event.target.files[0]);
    }
    function imagesEnter(event) {
        setImages(event.target.files);
    }
    function openEnter(event) {
        setOpeningtime(event.target.value);
    }
    function closeEnter(event) {
        setClosingtime(event.target.value);
    }
   
    async function btnclick(event) {
        event.preventDefault();
      
        try {
            setLoading(true);
          // Upload logo to Cloudinary
          const logoFormData = new FormData();
          logoFormData.append("file", logo);
          logoFormData.append("upload_preset", "bhavik-app");
          logoFormData.append("cloud_name", "dg1xa2wxc");
      
          const logoResponse = await fetch(
            "https://api.cloudinary.com/v1_1/dg1xa2wxc/image/upload",
            {
              method: "post",
              body: logoFormData,
            }
          );
      
          if (!logoResponse.ok) {
            setLoading(false)
            throw new Error(`HTTP error! Status: ${logoResponse.status}`);
            
          }
      
          const logoData = await logoResponse.json();
          const logourl = logoData.url;
      
          // Upload images to Cloudinary
          const imagesUrls = [];
      
          for (const file of images) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "bhavik-app");
            formData.append("cloud_name", "dg1xa2wxc");
      
            const imageResponse = await fetch(
              "https://api.cloudinary.com/v1_1/dg1xa2wxc/image/upload",
              {
                method: "post",
                body: formData,
              }
            );
      
            if (!imageResponse.ok) {
                setLoading(false)
              throw new Error(`HTTP error! Status: ${imageResponse.status}`);
            }
      
            const imageData = await imageResponse.json();
            imagesUrls.push(imageData.url);
          }
      
          // Make a POST request to your local server
          const response = await axios.post("https://backend-testing-1rgv.onrender.com/company_dashboard", {
            email: em,
            logo: logourl,
            images: imagesUrls,
            opening_time: openingtime,
            description: description,
            closing_time: closingtime,
          });
      
          if (response.data.data === "confirm") {
            alert("Successfully updated!");
            visible(true);
            setLoading(false);
            window.location.reload();
          } else {
            alert("Error updating data.");
            loading(false)
          }
        } catch (error) {
            setLoading(false)
          console.error('An error occurred:', error);
        }
      }
      
    return (<> <div className="flex justify-center">
        <div className="w-full lg:w-7/10">
            <div className="card text-center mt-12 font-Poppins">
                <form onSubmit={btnclick}>
            <div className="card-header" style={{  backgroundColor: "#007bff", color: "white" }}>
                Details
            </div>
            <div className="flex justify-center">
          
            <img
              src={image}
              className="w-72  max-w-full h-auto cursor-pointer"
              alt="..."
            //   onClick={handleImageClick}
            />
         </div>

            <h5 className="card-header"><i class="fa fa-building-o" aria-hidden="true" style={iconstyle}></i>{user.Company_name}<i className="fa fa-building-o" aria-hidden="true" style={{
                fontSize: "24px",
                marginTop: "8px",
                color: "#007bff", marginLeft: "10px"
            }} ></i></h5>

<li className="list-group-item" style={{ margin: "10px", wordWrap: "break-word", maxWidth: "300px" }}>
    <i className="fa fa-address-card" style={iconstyle} aria-hidden="true"></i>
    Address: {user.Address}
</li>

<hr></hr>
            {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="flex flex-row" >
                <i className="fa fa-file-text" aria-hidden="true" style={iconstyle}></i>
                <div className="input-bx w-full" style={emailfield}>
                    <textarea type="text" required="required" onChange={DescriptionEnter} value={description}  />
                    <span className="span-text">Description</span>
                </div>
            </div></li> */}
            <div className="input-div2 flex items-center  w-full pr-5 pl-1">
            <i className="fa fa-file-text ml-2 text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="ml-5 flex-grow relative">
            <div className="input-bx w-full" style={emailfield}>
                    <textarea type="text" required="required" onChange={DescriptionEnter} value={description}  />
                    <span className="span-text">Description</span>
                </div>
            </div>
        </div>
            <hr></hr>
            {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div" >
                <i className="fa fa-upload" aria-hidden="true" style={iconstyle}></i>

                <div className="mb-3"
                    style={{ marginLeft: "20px", width: "370px", border: "1px solid #000000", borderRadius: "5px" }}>
                    <span className="span-text" style={{ marginLeft: "10px", color: "#007bff" }}>Upload Company's Logo</span>
                    <input className="form-control" type="file" onChange={logoEnter} required />
                </div>

            </div></li> */}
                    <div className="input-div2 flex items-center  w-full">
            <i className="fa fa-upload ml-2 text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="ml-5 flex-grow relative">
                <span className="block mb-1 text-gray-700">Upload Company's Logo</span>
                <input className="input-bx" type="file" onChange={logoEnter} required />
            </div>
        </div>
            <hr />
            {/* <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div">
                <i className="fa fa-image" aria-hidden="true" style={iconstyle}></i>

                <div className="mb-3"
                   >
                    <input className="form-control" type="file" onChange={imagesEnter} required accept="image/*"
                        multiple />
                </div>

            </div></li> */}
             <div className="input-div2 flex items-center  w-full">
            <i className="fa fa-image ml-2 text-gray-500 text-xl" aria-hidden="true" style={iconstyle}></i>
            <div className="ml-5 flex-grow relative">
                <span className="block mb-1 text-gray-700">Upload Company's Images</span>
                <input className="input-bx" type="file" onChange={imagesEnter} required accept="image/*"
                        multiple />
            </div>
        </div>

            <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" >
                <i className="fa fa-clock-o" aria-hidden="true" style={iconstyle}></i>
                <h5 style={{marginTop:"10px"}}>Opening time</h5>
                <div className="input-bx ml-3" style={emailfield}>
                    <input type="time" required="required" onChange={openEnter} value={openingtime} />
                    
                </div>
            </div></li>
            <hr></hr>

            <li className="list-group-item" style={{ margin: "10px" }}><div className="input-div2" >
                <i className="fa fa-clock-o" aria-hidden="true" style={iconstyle}></i>
                <h5 style={{marginTop:"10px"}}>Closing time</h5>
                <div className="input-bx ml-5">
                    <input type="time" required="required" onChange={closeEnter} value={closingtime} />
                    
                </div>
            </div></li>
            <hr></hr>
            <li className="list-group-item flex justify-center" style={{ margin: "10px" }}>
    <div className="">
        <div className="flex justify-center">
            <button
                type="submit"
                className="centered-button"
                style={{ marginTop: "20px", fontFamily: "Poppins" }}
            >
                {loading ? "Loading..." : "Save"}
            </button>
        </div>
    </div>
</li>


        </form>
    </div>
    </div>
    </div></>)
}