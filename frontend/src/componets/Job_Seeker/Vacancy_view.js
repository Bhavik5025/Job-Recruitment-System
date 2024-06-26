import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Vacancy_view(props) {
    var [data, setData] = useState();
    var [company, setCompanyData] = useState();
    var [images, setImages] = useState([]);
    var [status, setStatus] = useState(false);
    var [vacancy, setVacancies] = useState(props.number_of_places);
    var [vacancy1, setVacancies1] = useState(props.number_of_places);
    const [loading,setLoading]=useState(false);
    useEffect(() => {
        console.log(props.Experience)
        axios.post("https://backend-testing-1rgv.onrender.com/company_dashboard_data", {
            email: props.email
        }).then((obj) => {
            console.log(obj);
            if (obj.data.data === true) {
                setData(obj.data.details);
                console.log(obj.data.details.logo);
                //   setLogo(obj.data.details.logo);
                setImages(obj.data.details.company_images)
                //   setDescription(obj.data.details.description)
            }
        }).catch((error) => {
            console.log(error);
        });
        axios.post("https://backend-testing-1rgv.onrender.com/company_details", {
            email: props.email
        })
            .then((response) => {
                setCompanyData(response.data.Data);
                // console.log(response.data.Data);

            })
            .catch((error) => {
                console.error('Error fetching  data:', error);
            });
        axios.post("https://backend-testing-1rgv.onrender.com/vacancy_request_data", {
            c_email: props.email,
            j_email: window.localStorage.getItem("email"),
            Approve: "false",
            Job_description: props.description
        }).then((data) => {

            console.log(data)
            if (data.data.data == "success") {
                console.log(data.data.data)
                setStatus(true);
                //   console.log("jaj")
            }
            console.log(data.data.error)
            if (data.data.error) {
                console.log(data.data.error)
                setStatus(false);
            }
        }).catch((error) => {
            console.log(error)
        });
        axios.post("https://backend-testing-1rgv.onrender.com/vacancy_Request_details_For_Jobber", {
            email: window.localStorage.getItem("email"),
            Approve: "true"
        }).then((data) => {
            console.log("hekk");
            console.log(data.data.data)
            if (data.data.data.length != 0) {
                setStatus(true);

            }
        }

        )
    }, []);

    function applyclick() {
        setLoading(true);
        axios.post("https://backend-testing-1rgv.onrender.com/vacancy_request", {
            c_email: props.email,
            Job_description: props.description,
            j_email: window.localStorage.getItem("email"),
            Approve: false
        }).then((data) => {
            if (data.data.data == "success") {
                alert("success");
                setStatus(true);
                setLoading(false);
            }
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        })
    }
    function vacancy_Update(event) {
        setVacancies(event.target.value);
    }
    const emailfield = {
        marginLeft: "19px"
    }
    const iconstyle1 = {
        fontSize: "30px",

        marginTop: "8px",
        color: "#007bff"
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    function updateBtn() {
        axios.post("https://backend-testing-1rgv.onrender.com/vacancy_update", {
            email: props.email,
            jdescription: props.description,
            Experience: props.Experience,
            qualification: props.qualification,
            vacancies: vacancy
        }).then((data) => {
            console.log(data)
            if (data.data.data == "success") {
                alert("Vacancy Update SuccessFully")
                setVacancies1(vacancy)
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    const mid = Math.ceil(images.length / 2);
    const leftColumn = images.slice(0, mid);
    const rightColumn = images.slice(mid);
    return (<>
    
        {data ?
            <section className="h-100 gradient-custom-2 " style={{  marginTop: "20px" }}>

                <div className="card">
                    <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#007bff", height: "200px" }}>
                        <div className="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                            <img src={data.logo} onClick={() => openModal(data.logo)}
                                alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                                style={{ width: "150px", zIndex: "1" }} />

                        </div>
                        <div className="ms-3" style={{ marginTop: "130px" }}>
                            {company ? <h5>{company.Company_name}</h5> : null}

                        </div>
                    </div>
                    <hr></hr>
                    <div className="card-body p-4 text-black">
                        <div className="mb-5">
                            <p className="lead fw-normal mb-1 ml-0">Description</p>
                            <div className="p-4 mx-auto w-full lg:max-w-2xl" style={{ backgroundColor: "#f8f9fa" }}>
    <p className="font-italic mb-1">{props.description}</p>

    <p className="font-italic mb-1"><i className="fa fa-asterisk" aria-hidden="true"></i><b>Field:-{props.Field}</b></p>
    <p className="font-italic mb-1"><i className="fa fa-asterisk" aria-hidden="true"></i><b>Number Of Vacancies:-{vacancy1}</b></p>
    <p className="font-italic mb-1"><i className="fa fa-asterisk" aria-hidden="true"></i><b>Package:-{props.package} <i className="fa fa-inr" aria-hidden="true"></i></b></p>
</div>


                        </div>
                        {props.show == "false" ?
                            <div className="mb-5">
                                <p className="lead fw-normal mb-1">About Company</p>
                                <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                    {data ? <>

                                        <p className="font-italic mb-1"><i class="fa fa-asterisk" aria-hidden="true"></i>{data.description}</p>
                                        <p className="font-italic mb-1"><i class="fa fa-envelope" aria-hidden="true"></i>{props.email}</p>
                                        {company ? <p className="font-italic mb-1"><i class="fa fa-phone" aria-hidden="true"></i>{company.Mobile_no}</p> : null}

                                        {company ? <p className="font-italic mb-1"><i class="fa fa-building" aria-hidden="true"></i>{company.Address}</p> : null}
                                        <div className="flex flex-col sm:flex-row">
  <p className="font-italic mb-1 flex items-center">
    <i className="fa fa-clock-o" aria-hidden="true"></i>
    <span className="ml-2">Opening Time: {data.opening_time}</span>
  </p><div className="w-5"></div>
  <p className="flex items-center sm:ml-4 mt-2 sm:mt-0">
    <i className="fa fa-clock-o" aria-hidden="true"></i>
    <span className="ml-2">Closing Time: {data.closing_time}</span>
  </p>
</div>

                                        <div className="d-flex justify-content-between align-items-center mb-4">

                                            <p className="lead fw-normal mb-0" style={{ marginTop: "10px" }}>photos</p>

                                        </div>
                                        <div className="row g-2">
                                            <div class="col mb-2">
                                                {leftColumn.map((image, index) => (
                                                    <img key={index} src={image} alt={`Image ${index}`}  onClick={() => openModal(image)} className="w-full rounded-3xl object-cover cursor-pointer"
                                                    style={{ height: "200px" }} />
                                                ))}
                                            </div>
                                            <div className="col mb-2">
                                                {rightColumn.map((image, index) => (
                                                    <img key={index} src={image} alt={`Image ${index}`}  onClick={() => openModal(image)} className="w-full rounded-3xl object-cover cursor-pointer"
                                                    style={{ height: "200px" }} />
                                                ))}
                                            </div>
                                        </div>
                                    </> : null}

                                </div>
                                {props.show == "false" ? status == true ? <button className="centered-button" onClick={applyclick} style={{ textAlign: "center", marginTop: "10px" }} disabled>Applied</button> : <button className="centered-button" onClick={applyclick} style={{ textAlign: "center", marginTop: "10px" }} >{loading?"Loading...":"Apply"}</button>
                                    : null}

                            </div> : <div className="flex flex-col lg:flex-row items-center">
                               <div className="flex flex-row"><i className="fa fa-edit" aria-hidden="true" style={iconstyle1}></i>
                                <div className="input-bx" style={emailfield}>
                                    <input type="number" required="required" onChange={vacancy_Update} value={vacancy} className="p-2 border rounded" />
                                    <span className="span-text">Number of Vacancy</span>
                                </div></div> 
                                <button className="centered-button mt-2 lg:mt-0 lg:ml-2 p-2 bg-blue-500 text-white rounded" onClick={updateBtn}>Update</button>
                            </div>
                        }

                    </div>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={closeModal}>
                        <div className="relative">
                            <img src={selectedImage} alt="Zoomed" className="rounded-3xl object-cover" style={{ maxHeight: "80vh", maxWidth: "80vw" }} />
                            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-2xl">&times;</button>
                        </div>
                    </div>
                )}
            </section>
            : null}

    </>)
}